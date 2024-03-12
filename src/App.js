import "./App.css";
import RenderField from "./MUI";
import  BootsrapFields from "./Bootsrap"
import fields from "./meta.json";

function App() {
  return (
    <div className="App">
      {fields.map((field) => (
        <div key={field.id}>
          <RenderField field={field} /> 
          <BootsrapFields field={field} />
          </div>
      ))}
    </div>
  );
}

export default App;
