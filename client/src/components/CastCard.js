import styles from './CastCard.module.css';

export default function CastCard({ cast }) {
    return (
        <div className={styles.cardMain}>
            <img src={'https://image.tmdb.org/t/p/original' + cast.profile_path} className={styles.cardImage} />
            <div  className={styles.cardBody}>
                <div className={styles.cardName}><b>{cast.name}</b></div>
                <div className={styles.cardCharacter}>{cast.character}</div>
            </div>
        </div>
    )
}