import "./App.css";
import RenderField from "./MUI";
import  BootsrapFields from "./Bootsrap"
import fields from "./meta.json";

function App() {
  return (
    <div className="App" style={{width:500, margin:'0 auto'}}>
      {fields.map((field) => (
        <div key={field.id} className="mb-3">
          <p>Intpu Type {field.input}</p>
          {/* <RenderField field={field} />  */}
          <BootsrapFields field={field} />
          </div>
      ))}
    </div>
  );
}

export default App;
