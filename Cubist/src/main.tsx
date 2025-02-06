import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Timer from "./timer";
import Scramble3 from "./scramble3";
import "./styles.css";
import TimeData from "./timeData";
import CubeVisual from "./cubeVisual";

const App = () => {
  const [timeList, setTimeList] = useState<Array<number>>([]);
  const [ao5List, setao5List] = useState<Array<number>>([]);
  const [ao12List, setao12List] = useState<Array<number>>([]);
  const [scrambleCreated, setscrambleCreated] = useState<string>('');

  return (
    <StrictMode>
      <TimeData timeList={timeList} ao5List={ao5List} ao12List={ao12List}/>
      <Timer timeList={timeList} setTimeList={setTimeList} ao5List={ao5List} setao5List={setao5List} ao12List={ao12List} setao12List={setao12List}/>
      <Scramble3 scrambleCreated={scrambleCreated} setScrambleCreated={setscrambleCreated}/>
      <CubeVisual scrambleCreated={scrambleCreated}/>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<App />);