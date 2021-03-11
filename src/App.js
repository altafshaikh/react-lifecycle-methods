import logo from "./logo.svg";
import "./App.css";
import Employee from "./components/Employee";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <User userName={"altaf"} /> */}
        <Employee />
      </header>
    </div>
  );
}

export default App;
