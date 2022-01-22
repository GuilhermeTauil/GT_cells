import styles from '../styles/Header.module.css';

export default function header() {
    return (
        <div className={styles.header}>
            <a className={styles.logo}>Tauil-GT</a>
        </div>
    );
}