// src/App.tsx

import HabitsList from './components/HabitsList';
import HabitForm from './components/HabitForm';
import Filters from './components/Filters';
import CursorTrail from './components/CursorTrail'; // Importe o novo componente
import { useDispatch } from 'react-redux';
import { clearCompleted } from './features/habits/habitsSlice';
import './index.css';


function App() {
  const dispatch = useDispatch();

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <> {/* Fragmento para poder adicionar o CursorTrail */}
      <CursorTrail /> {/* Adicione o componente aqui */}
      <div className="container">
        <h1> <span style={{color: 'var(--neon-green)', textShadow: '0 0 5px var(--neon-green)'}}>Controle de Hábitos diários</span></h1>
        <HabitForm />
        <Filters />
        <HabitsList />
        <button onClick={handleClearCompleted} style={{marginTop: '20px', width: '100%'}}>
          Limpar Hábitos Concluídos
        </button>
      </div>
    </>
  );
}

export default App;


