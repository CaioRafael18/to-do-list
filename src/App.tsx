import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Search } from "./components/Search";
import { useState } from "react";
import styles from './App.module.css';
import './global.css';

export function App() {
  const [tasks, setTasks] = useState<string[]>([]); // lista de tarefas
  const [completedTasksCount, setCompletedTasksCount] = useState<number>(0); // Contador de tarefas concluídas

  // Função para adicionar uma nova tarefa
  function handleAddTask(taskText: string) {
    setTasks((prevTasks) => [...prevTasks, taskText]);
  }

  // Função para excluir uma tarefa
  function handleDeleteTask(taskToDelete: string, wasCompleted: boolean) {
    setTasks((prevTasks) => prevTasks.filter(task => task !== taskToDelete));

    // Se a tarefa excluída estava marcada como concluída, decrementa o contador
    if (wasCompleted) {
      setCompletedTasksCount((prevCount) => prevCount - 1);
    }
  }

  // Função para marcar/desmarcar uma tarefa como concluída
  function handleTaskCompletion(isCompleted: boolean) {
    setCompletedTasksCount((prevCount) => isCompleted ? prevCount + 1 : prevCount - 1);
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        {/* Passa a função de adicionar tarefa para o componente Search */}
        <Search onAddTask={handleAddTask} />

        {/* Passa as tarefas e as funções de manipulação de tarefas para o componente Main */}
        <Main
          tasks={tasks}
          completedTasksCount={completedTasksCount}
          onDeleteTask={handleDeleteTask}
          onTaskCompletion={handleTaskCompletion}
        />
      </div>
    </div>
  );
}
