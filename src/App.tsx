import classNames from "./App.module.css";

function App() {
  return (
    <>
      <div className={classNames.header}>URL Shortener</div>
      <div className={classNames.main}>
        <input type="text" placeholder="Long URL" />
        <button>Shorten</button>
      </div>
    </>
  );
}

export default App;
