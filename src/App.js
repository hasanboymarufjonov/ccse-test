import "./App.css";
import NewDetail from "./API/NewDetail";
import About from "./API/About";
import { Post } from "./API/Post";
function App() {
  return (
    <div className="App">
      <NewDetail />
      <About />
      <Post />
    </div>
  );
}

export default App;
