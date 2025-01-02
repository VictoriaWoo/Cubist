import TimeList from "./timeList";
import AverageCharts from "./averageCharts";
import React from "react";

const TimeData: React.FC<{ timeList: Array<number>}> = ({timeList }) =>{
    return (
        <div className="timeData">
            <TimeList timeList={timeList} />
            <AverageCharts timeList={[]} />
        </div>
    );
};

export default TimeData;