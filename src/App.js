
import './App.css';
import Header from './components/Header';
import TodoList from './components/Todolist';
import { useState } from "react";
function App() {
  const [isRefresh, setIsRefresh] = useState(true)

  const setRefresh = (status) => {
    setIsRefresh(status)
  }
  return (
       <div className="App">
      <div className="content">
        <Header setRefresh={setRefresh} />
        <TodoList setRefresh={setRefresh} isRefresh={isRefresh} />
      </div>
    </div>
  );
}

export default App;
