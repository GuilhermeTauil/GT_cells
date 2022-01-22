import styles from '../styles/content.module.css';

export default function content() {
    return (
        <div className={styles.content}>
            <a href='https://api.whatsapp.com/send?phone=5521996069161&text=Ol%C3%A1%2C%20vim%20pelo%20site!' className={styles.whattsapp}> Whatsapp</a>
            <a href='https://www.instagram.com/tauilgt_assistencia/' className={styles.Instagram}> Instagram</a>
        </div>
    );
}