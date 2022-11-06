import { Routes, Route } from "react-router-dom";
import Counter from "./components/counter/Counter";
import NotFound from "./components/error/NotFound";

function App() {
  return (
      <div className="container">
        <Routes>
          <Route path="/" element={<Counter />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
  );
}

export default App;
