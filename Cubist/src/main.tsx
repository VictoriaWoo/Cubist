import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Timer from "./timer";
import Scramble3 from "./scramble3";
import "./styles.css";
import { useState } from "react";

const App = () => {
  const [timeList, setTimeList] = useState<Array<number>>([]);

return(
  <StrictMode>
    <Timer timeList={timeList} setTimeList={setTimeList} />
    <Scramble3 />
  </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<App />);  