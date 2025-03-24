import React, { useState, useEffect } from "react";
import Preview from "./aadhar/Preview";
import AadharFormart from "./aadhar/AadharFormart";
const App = () => {
  const [detail, setDetail] = useState({});

  return (
    <div className="container">
      <div>
        <AadharFormart detail={detail} setDetail={setDetail} />
      </div>
      <div>
        <Preview detail={detail} setDetail={setDetail} />
      </div>
    </div>
  );
};

export default App;
