import { useState, useEffect } from "react";

function Timer({
  timeList,
  setTimeList,
}: {
  timeList: Array<number>;
  setTimeList: React.Dispatch<React.SetStateAction<Array<number>>>;
}) {
  const [min, setMin] = useState<number>(0);
  const [sec, setSec] = useState<number>(0);
  const [msec, setMsec] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const makeTimeForm = (time: number): void => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const milliseconds = Math.floor((time % 1) * 100);

    setMin(minutes);
    setSec(seconds);
    setMsec(milliseconds);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        if (!isRunning) {
          setCurrentTime(0);
        } else {
          setTimeList([currentTime, ...timeList]);
        }
        setIsRunning((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isRunning, currentTime]);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          const newTime = prevTime + 0.01;
          makeTimeForm(newTime);
          return newTime;
          console.log(newTime);
        });
      }, 10);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isRunning]);

  const padZero = (num: number): string => num.toString().padStart(2, "0");

  return (
    <div className="timer-container">
      <span className="time">{padZero(min)}</span>
      <span className="colon">:</span>
      <span className="time">{padZero(sec)}</span>
      <span className="period">.</span>
      <span className="time">{padZero(msec)}</span>
    </div>
  );
}

export default Timer;
