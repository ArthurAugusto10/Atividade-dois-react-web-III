import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/habits/habitsSlice';
import type { RootState } from '../app/store';

function Filters() {
  const dispatch = useDispatch();
  const habits = useSelector((state: RootState) => state.habits.habits);
  const currentFilter = useSelector((state: RootState) => state.habits.filter);


  // Pega todas as categorias únicas e adiciona 'todos'
  const categories = ['todos', ...new Set(habits.map(habit => habit.category))];

  const handleFilterChange = (filter: string) => {
    dispatch(setFilter(filter));
  };

  return (
    <div className="filters-container"> {/* Adicione a classe container de filtros */}
      <h3>// FILTRO DE CATEGORIAS //</h3>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => handleFilterChange(category)}
          // Adicionar um estilo para o botão de filtro ativo
          style={currentFilter === category ? {
            backgroundColor: 'var(--neon-pink)',
            borderColor: 'var(--neon-purple)',
            boxShadow: '0 0 10px var(--neon-pink)',
            color: 'var(--bg-dark)'
          } : {}}
        >
          {category.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default Filters;