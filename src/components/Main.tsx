import { Notepad } from 'phosphor-react';
import { Task } from './Task';
import styles from './Main.module.css';

// Definindo a interface para as propriedades do componente "Main"
interface MainProps {
    tasks: string[]; // Lista de tarefas a serem exibidas
    completedTasksCount: number; // Contador de tarefas concluídas
    onDeleteTask: (task: string, wasCompleted: boolean) => void; // Função para excluir tarefa
    onTaskCompletion: (isCompleted: boolean) => void; // Função para marcar tarefas como concluídas
}

export function Main({ tasks, completedTasksCount, onDeleteTask, onTaskCompletion }: MainProps) {
    const countTasks = tasks.length; // número total de tarefas

    return (
        <main className={styles.main}>
            <div className={styles.info}>
                <div className={styles.tasksCreated}>
                    <p className={styles.tasksCreatedText}>Tarefas criadas</p>
                    <span className={styles.tasksCreatedCount}>{countTasks}</span>
                </div>

                <div className={styles.tasksCompleted}>
                    <p className={styles.tasksCompletedText}>Concluídas</p>
                    <span className={styles.tasksCompletedCount}>{completedTasksCount} de {countTasks}</span>
                </div>
            </div>

            {/* Valida se tem tarefas */}
            {tasks.length === 0 ? (
                <div className={styles.noTasks}>
                    <Notepad size={100} color='#333333' />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            ) : (
                <ul className={styles.listTasks}>
                    {tasks.map(task => (
                        <Task
                            key={task}
                            taskText={task}
                            onDelete={onDeleteTask}
                            onTaskCompletion={onTaskCompletion}
                        />
                    ))}
                </ul>
            )}
        </main>
    );
}
