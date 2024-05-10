import React, { useState } from "react";
import { useEffect } from "react";

const DataFetching = () => {
  const [nationData, setData] = useState([]);
  useEffect(() => {
    (async () => {
      let data = await fetch(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );
      console.log("this is data before : ", data);
      let jsonData = await data.json();
      console.log(jsonData.data);
      setData(jsonData.data);
    })();
  }, []);

  return (
    <div>
      {/* <img src={img} alt="" /> */}
      <table border={1}>
        <thead>
          <tr>
            <th>ID Nation</th>
            <th>ID Year</th>
            <th>Nation</th>
            <th>Population</th>
            <th>Slug Nation</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {nationData.map((elm, index) => {
            return (
              <tr key={index}>
                <td> {elm["ID Nation"]}</td>
                <td> {elm["ID Year"]}</td>
                <td> {elm["Nation"]}</td>
                <td> {elm["Population"]}</td>
                <td> {elm["Slug Nation"]}</td>
                <td> {elm["Year"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataFetching;
