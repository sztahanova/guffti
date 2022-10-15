import { Button } from "rsuite";
import "./App.css";

function App() {
  return (
    <>
      <img src="/shark.png" alt="A shark. A cute shark." />
      <Button onClick={() => alert("Guffti!")}>This is a button.</Button>
    </>
  );
}

export default App;
