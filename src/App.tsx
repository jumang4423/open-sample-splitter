import SpliterUI from "./components/SpliterUI";
import "./App.css";

function App() {
  return (
    <>
      <link
        href="https://pvinis.github.io/iosevka-webfont/3.4.1/iosevka.css"
        rel="stylesheet"
      />
      <div className="card">
        <h1>🫧 Open Sample Splitter</h1>
        <SpliterUI />
      </div>
      <p className="read-the-docs">created by jumango</p>
    </>
  );
}

export default App;
