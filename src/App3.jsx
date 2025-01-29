import React from "react";

const DisplaySum = (props) => {
  const sum = props.x + props.y;
  return (
    <div>
      <h1>{sum}</h1>
    </div>
  );
};
const App3 = () => {
  return (
    <div>
      <DisplaySum x={10} y={60} />
      <DisplaySum x={20} y={89} />
      <DisplaySum x={400} y={600} />
      <DisplaySum x={110} y={670} />
    </div>
  );
};

export default App3;
