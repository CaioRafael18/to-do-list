import { useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import styles from './Search.module.css';

export function Search({ onAddTask }: { onAddTask: (taskText: string) => void }) {
  const [taskText, setTaskText] = useState<string>(''); // texto da nova tarefa

  // Função para atualizar o texto da tarefa ao digitar no campo de entrada
  function onChangeTaskText(e: React.ChangeEvent<HTMLInputElement>): void {
    setTaskText(e.target.value);
  }

  // Função para criar uma nova tarefa e limpar o campo de entrada
  function hanleCreateTask(): void {
    if (taskText) {
      onAddTask(taskText);
      setTaskText('');
    } else {
      alert('Digite o texto da tarefa');
    }
  }

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.searchInput}
        onChange={onChangeTaskText}
        value={taskText}
      />
      <button
        className={styles.searchButton}
        onClick={hanleCreateTask}
      >
        Criar <PlusCircle size={22} />
      </button>
    </div>
  );
}