export interface Habit {
    id: string;
    name: string;
    category: string;
    completed: boolean;
  }
  
  export interface HabitsState {
    habits: Habit[];
    filter: string; // Para filtrar por categoria
  }