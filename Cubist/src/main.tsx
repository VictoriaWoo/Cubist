import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Timer from "./timer";
import Scramble3 from "./scramble3";
import "./styles.css";
import TimeData from "./timeData";

const App = () => {
  const [timeList, setTimeList] = useState<Array<number>>([]);
  
  return (
    <StrictMode>
      <TimeData timeList={timeList}/>
      <Timer timeList={timeList} setTimeList={setTimeList} />
      <Scramble3 />
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<App />);