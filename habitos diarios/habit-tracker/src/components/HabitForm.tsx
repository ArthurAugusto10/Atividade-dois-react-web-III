import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../features/habits/habitsSlice';
import type { Habit } from '../types';

function HabitForm() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newHabit: Habit = {
      id: Date.now().toString(), // ID simples e único
      name,
      category: category.trim() || 'Geral', // Categoria padrão se não for informada
      completed: false,
    };

    dispatch(addHabit(newHabit));
    setName('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>-- Novo Hábito // Inserir Dados --</h2>
      <input
        type="text"
        placeholder="Nome do Hábito [Obrigatório]"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Categoria [Opcional] (ex: saúde, estudo)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit" style={{width: '100%'}}>Adicionar Hábito</button>
    </form>
  );
}

export default HabitForm;