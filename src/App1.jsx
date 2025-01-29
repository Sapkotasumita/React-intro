const h1Style = {
  color: "red",
  fontSize: "5rem",
  background: "black",
};

const App1 = () => {
  const num = 25;
  return (
    <div>
      <h1 style={h1Style}>Hello world</h1>
      <p>{num}</p>
      <button
        onClick={() => {
          console.log("Button clicked");
          alert("Hi....Whats up");
        }}
      >
        click me
      </button>
    </div>
  );
};
export default App1;
