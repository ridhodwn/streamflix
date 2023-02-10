import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import styles from './MovieCard.module.css';
import slugify from 'slugify';

export default function MovieCard({ movie }) {
    let price = '';
    if(movie.vote_average >= 1 && movie.vote_average <= 3) {
        price = 'Rp 3.500';
    } else if (movie.vote_average >= 4 && movie.vote_average <= 6) {
        price = 'Rp 8.250';
    } else if (movie.vote_average >= 7 && movie.vote_average <= 8) {
        price = 'Rp 16.350';
    } else {
        price = 'Rp 21.250';
    }

    return (
        <Link to={`/${movie.id}-${slugify(movie.original_title)}`} className={styles.cardLink}>
            <Card className={styles.cardMain}>
                <Card.Img src={'https://image.tmdb.org/t/p/original' + movie.poster_path} className={styles.cardImage}/>
                <Card.Body>
                    <Card.Title>{movie.original_title}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Card.Text className={styles.cardOwnership}>Not Owned</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}