import "./App.css";
import RenderField from "./Render";
import fields from "./meta.json";

function App() {
  return (
    <div className="App">
      {fields.map((field) => (
        <RenderField field={field} />
      ))}
    </div>
  );
}

export default App;
