import { Routes, Route } from "react-router-dom";
import Counter from "./components/counter/Counter";
import NotFound from "./components/error/NotFound";
import CounterContext from "./hooks/CounterContext";

function App() {
  return (
    <main className="container">
      <CounterContext>
        <Routes>
          <Route path="/" element={<Counter />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </CounterContext>
    </main>
  );
}

export default App;
