import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from './Task.module.css';

// Definindo a interface para as propriedades do componente "Task"
interface TaskProps {
    taskText: string; // Texto da tarefa
    onDelete: (task: string, wasCompleted: boolean) => void; // Função para excluir a tarefa
    onTaskCompletion: (isCompleted: boolean) => void; // Função para marcar a tarefa como concluída
}

export function Task({ taskText, onDelete, onTaskCompletion }: TaskProps) {
    const [isCompleted, setIsCompleted] = useState<boolean>(false); // Estado que guarda se a tarefa foi completada ou não

    // Função que é chamada quando o checkbox é alterado, marcando ou desmarcando a tarefa
    function handleCheckboxChange(): void {
        const newCompletedStatus = !isCompleted;
        setIsCompleted(newCompletedStatus);
        onTaskCompletion(newCompletedStatus);
    }

    return (
        <li className={styles.task}>
            {/* Checkbox para marcar a tarefa como concluída */}
            <label className={styles.checkboxContainer}>
                <input type="checkbox" onChange={handleCheckboxChange} />
                <span className={styles.checkmark}></span>
            </label>

            {/* Texto da tarefa */}
            <p className={isCompleted ? styles.taskCompleted : styles.taskUnCompleted}>
                {taskText}
            </p>

            {/* Ícone de lixeira para excluir a tarefa */}
            <Trash
                size={20}
                className={styles.trash}
                onClick={() => onDelete(taskText, isCompleted)} 
            />
        </li>
    );
}
