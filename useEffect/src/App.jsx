import DataFetching from "./Components/DataFetching";
import DocTitle from "./Components/DocTitle";
import PosTracking from "./Components/PosTracking";
import Timer from "./Components/Timer";
import WindowEvent from "./Components/WindowEvent";

function App() {
  return (
    <>
      <h1>useEffect hook</h1>
      <DataFetching />
      <hr />
      <DocTitle />
      <hr />
      <PosTracking />
      <hr />
      <Timer />
      <hr />
      <WindowEvent />
    </>
  );
}

export default App;
