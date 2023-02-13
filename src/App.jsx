import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" age="13" origin="USA" />
      <Pet name="Pepper" animal="Bird" age="8" origin="Rio" />
      <Pet name="Garfield" animal="Cat" age="4" origin="Pakistan" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
