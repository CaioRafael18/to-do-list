import styles from './Header.module.css'
import rocketImg from '../assets/rocket.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocketImg} alt='To Do'></img>
            <h1>to<strong>do</strong></h1>
        </header>
    )
}