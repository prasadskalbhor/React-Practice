import React, { useEffect, useState } from "react";

const DocTitle = () => {
  const [title, settitle] = useState("");
  useEffect(() => {
    console.log("title changed : ", title);
    document.title = title;
  }, [title]);
  return (
    <div>
      <input type="text" onInput={(e) => settitle(e.target.value)} />
    </div>
  );
};

export default DocTitle;
