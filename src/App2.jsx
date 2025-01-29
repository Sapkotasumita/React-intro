import React from "react";

const Card = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        padding: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzy1aR53r48Yu8NSwXwEzgCEZqsDRtonZyQ&s"
        alt="Tv image"
        height={300}
        width={300}
      />
      <h3> Samsung Tv</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, rem!
        Neque doloribus odio perferendis! Porro incidunt voluptate amet libero
        possimus corporis, quo iure ratione distinctio accusantium architecto,
        cumque, molestias dolore?
      </p>
      <button
        style={{
          padding: "10px",
          background: "aqua",
          border: "none",
          cursor: "pointer",
        }}
      >
        see more
      </button>
    </div>
  );
};

const App2 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        flexWrap: "wrap",
        margin: "4rem",
      }}
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default App2;

// rafce : react arrow function component with  export
