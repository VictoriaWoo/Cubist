const TimeList: React.FC<{ timeList: Array<number>}> = ({timeList }) => {
    return (
        <div className="timeList-container">
            {timeList.map((time: number, index: number) => (
                <div key={index} className="time-box">
                    {time.toFixed(2)}
                </div>
            ))}
        </div>
    );
};

export default TimeList;