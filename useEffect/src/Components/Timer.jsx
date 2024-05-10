import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    console.log("calledd");
    setInterval(() => {
      console.log("this si stime : ", new Date());
      let t = new Date();
      setTime(
        String(t.getHours()) +
          "-" +
          String(t.getMinutes()) +
          "-" +
          String(t.getSeconds())
      );
    }, 1000);
  }, []);
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  return (
    <div>
      <h1>timer</h1>
      <h2>{time}</h2>
    </div>
  );
};

export default Timer;
