//components
import Navbar from "./components/Header";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <TodoForm />
      </main>
    </div>
  );
}

export default App;
