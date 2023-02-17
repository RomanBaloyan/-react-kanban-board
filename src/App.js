import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Board from "./pages/Board/Board";
import Task from "./pages/Task/Task";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/tasks/:id" element={<Task />} />
        <Route exact path="/" element={<Board />} />
      </Routes>
    </Layout>
  );
};

export default App;
