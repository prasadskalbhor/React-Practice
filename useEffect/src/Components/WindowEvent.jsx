import React, { useEffect, useState } from "react";

const WindowEvent = () => {
  const [data, setData] = useState({ width: null, height: null });
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      //   console.log("size", e.target.innerWidth);
      setData({ width: e.target.innerWidth, height: e.target.innerHeight });
    });
  }, []);

  return (
    <div>
      width : {data.width} <br />
      Height : {data.height}
    </div>
  );
};

export default WindowEvent;
