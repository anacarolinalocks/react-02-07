import './App.css';
import TodoList from './components/TodoList.jsx';

function App() {
  const tasks = [
    { id: 1, text: 'Aprender React' },
    { id: 2, text: 'Construir um projeto simples' },
    { id: 3, text: 'Entender Props e State' },
  ];

  return (
    <div className='App'>
      <TodoList content={tasks} />
    </div>
  );
}

export default App;
