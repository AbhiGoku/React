
import "./App.css";
import SecondLine from "./Components/SecondLine";
import CurrentTime from "./Components/CurrentTime";
import Heading from "./Components/Heading";


function App() {
  return (
    <div>
      <Heading />
      <SecondLine></SecondLine>
      <CurrentTime></CurrentTime>
    </div>
  );
}

export default App;
