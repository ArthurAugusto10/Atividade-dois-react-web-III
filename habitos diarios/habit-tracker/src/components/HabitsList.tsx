import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../app/store';
import {
  toggleComplete,
  deleteHabit,
} from '../features/habits/habitsSlice';
import type { Habit } from '../types';

function HabitsList() {
  const habits = useSelector((state: RootState) => {
    const filter = state.habits.filter;
    if (filter === 'todos') {
      return state.habits.habits;
    }
    return state.habits.habits.filter(habit => habit.category === filter);
  });
  const dispatch = useDispatch();

  const handleToggleComplete = (id: string) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteHabit = (id: string) => {
    // Você pode adicionar uma confirmação aqui
    if (window.confirm('Tem certeza que deseja excluir este hábito?')) {
      dispatch(deleteHabit(id));
    }
  };

  return (
    <div>
      <h2>-- Hábitos Carregados --</h2> {/* Título estilizado */}
      {habits.length === 0 ? (
        <p style={{textAlign: 'center', color: 'var(--neon-pink)'}}>Nenhum hábito no sistema... Iniciando protocolo de criação.</p>
      ) : (
        <ul>
          {habits.map((habit: Habit) => (
            <li key={habit.id}>
              <input
                type="checkbox"
                checked={habit.completed}
                onChange={() => handleToggleComplete(habit.id)}
              />
              <span className={habit.completed ? 'completed' : ''}> {/* Adicione a classe 'completed' */}
                {habit.name} <span style={{fontSize: '0.8em', color: 'var(--neon-blue)'}}>// {habit.category || 'Geral'}</span>
              </span>
              <button onClick={() => handleDeleteHabit(habit.id)}>Excluir</button>
              {/* Para edição, você pode criar um modal ou um formulário inline */}
              <button>Editar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HabitsList;