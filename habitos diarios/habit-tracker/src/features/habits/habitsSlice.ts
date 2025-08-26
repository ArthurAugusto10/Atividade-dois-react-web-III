// src/features/habits/habitsSlice.ts

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Habit, HabitsState } from '../../types';

// Estado inicial com alguns hábitos de exemplo
const initialState: HabitsState = {
  habits: [
    { id: '1', name: 'Beber água', category: 'saúde', completed: false },
    { id: '2', name: 'Ler 20 páginas', category: 'estudo', completed: true },
    { id: '3', name: 'Caminhar 30min', category: 'exercício', completed: false },
  ],
  filter: 'todos', // O filtro inicial
};

const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    // Adicionar um novo hábito
    addHabit: (state, action: PayloadAction<Habit>) => {
      state.habits.push(action.payload);
    },

    // Editar um hábito
    editHabit: (state, action: PayloadAction<Habit>) => {
      const { id, name, category } = action.payload;
      const existingHabit = state.habits.find(habit => habit.id === id);
      if (existingHabit) {
        existingHabit.name = name;
        existingHabit.category = category;
      }
    },

    // Excluir um hábito
    deleteHabit: (state, action: PayloadAction<string>) => {
      state.habits = state.habits.filter(habit => habit.id !== action.payload);
    },

    // Marcar/desmarcar um hábito como concluído
    toggleComplete: (state, action: PayloadAction<string>) => {
      const habit = state.habits.find(habit => habit.id === action.payload);
      if (habit) {
        habit.completed = !habit.completed;
      }
    },

    // Limpar todos os hábitos concluídos
    clearCompleted: (state) => {
      state.habits = state.habits.filter(habit => !habit.completed);
    },

    // Filtrar hábitos por categoria
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addHabit,
  editHabit,
  deleteHabit,
  toggleComplete,
  clearCompleted,
  setFilter,
} = habitsSlice.actions;

export default habitsSlice.reducer;