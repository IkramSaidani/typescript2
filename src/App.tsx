import Greeting from "./Code1";
import Counter from "./Code2";


function App() {
  return (
    <div className="App">
      {/*call the Greeting from the code 1 and pass the name as a prop */}
      <Greeting name="ikram" />
      {/*Call the Counter from the code 2*/}
      <Counter />
    </div>
  );
}

export default App;
