import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      {/* header section */}
      <Header />

      {/* todo section */}
      <Todo />

      {/* footer section */}
      <p className="text-center text-gray-400">Copyright © 2021</p>
    </div>
  );
}

export default App;
