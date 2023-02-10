import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CastCard from '../components/CastCard';
import { fetchMovieById, fetchMovieCasts, fetchMovieRecommended, fetchMovieSimilar } from '../store/actions/action-creator';
import styles from './DetailPage.module.css';
import MovieCard from '../components/MovieCard';

export default function DetailPage() {
    const movie = useSelector((state) => {
        return state.movie;
    });
    const casts = useSelector((state) => {
        return state.casts;
    });
    const recommended = useSelector((state) => {
        return state.recommended;
    });
    const similar = useSelector((state) => {
        return state.similar;
    });
    const [loadingMovie, setLoadingMovie] = useState(true);
    const dispatch = useDispatch();
    const { idslug } = useParams();
    const id = idslug.substring(0, idslug.indexOf('-'))

    useEffect(() => {
        dispatch(fetchMovieById(id))
            .then(() => {
                console.log('Success Fetch');
            })
            .catch((err) => {
                console.log('Fail Fetch', err);
            })
            .finally(() => {
                setLoadingMovie(false);
            });

        dispatch(fetchMovieCasts(id))
            .then(() => {
                console.log('Success Fetch');
            })
            .catch((err) => {
                console.log('Fail Fetch', err);
            })
            .finally(() => {
                setLoadingMovie(false);
            });

        dispatch(fetchMovieRecommended(id))
            .then(() => {
                console.log('Success Fetch');
            })
            .catch((err) => {
                console.log('Fail Fetch', err);
            })
            .finally(() => {
                setLoadingMovie(false);
            });

        dispatch(fetchMovieSimilar(id))
        .then(() => {
            console.log('Success Fetch');
        })
        .catch((err) => {
            console.log('Fail Fetch', err);
        })
        .finally(() => {
            setLoadingMovie(false);
        });
    }, []);
    if (loadingMovie) {
        return <h1 className="p-4">Loading...</h1>
    }

    let price = '';
    if (movie.vote_average >= 1 && movie.vote_average <= 3) {
        price = 'Rp 3.500';
    } else if (movie.vote_average >= 4 && movie.vote_average <= 6) {
        price = 'Rp 8.250';
    } else if (movie.vote_average >= 7 && movie.vote_average <= 8) {
        price = 'Rp 16.350';
    } else {
        price = 'Rp 21.250';
    }

    return (
        <div>
            <div className={styles.titleContainer}>
                <h2><b>{movie.title}</b></h2>
                <h6>Not Owned</h6>
            </div>
            <div className={styles.movieContainer}>
                <div>
                    <img src={'https://image.tmdb.org/t/p/original' + movie.poster_path} className={styles.imageContainer} />
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.infoContainerTop}>
                        <div className={styles.ratingContainer}>
                            <h6>Rating</h6>
                            <div className={styles.ratingBox}>
                                <h1 className={styles.rating}>{movie.vote_average}</h1>
                            </div>
                        </div>
                        <div className={styles.priceContainer}>
                            <h3 className={styles.price}>{price}</h3>
                            <button className={styles.buyButton}><b>Buy</b></button>
                        </div>
                    </div>
                    <h5 className={styles.info}><b>MOVIE INFO</b></h5>
                    <div className={styles.detailContainer}>
                        <div className={styles.genreContainer}>
                            <div className={styles.genre}>
                                <p><b>Genre:</b></p>
                            </div>
                            <p>{movie.genres[0].name}</p>
                        </div>
                        <div className={styles.genreContainer}>
                            <div className={styles.synopsis}>
                                <p><b>Synopsis:</b></p>
                            </div>
                            <div className={styles.synopsisDetail}>
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                        <div className={styles.genreContainer}>
                            <div className={styles.genre}>
                                <p><b>Runtime:</b></p>
                            </div>
                            <p>{movie.runtime} minutes</p>
                        </div>
                    </div>
                    <h5 className={styles.info}><b>CAST</b></h5>
                    <div className={styles.cardContainer}>
                        {
                            casts.map(cast => {
                                return (
                                    <CastCard key={cast.id} cast={cast} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={styles.moreContainer}>
                <div className={styles.recommendedContainer}>
                    <h5 className={styles.info}><b>RECOMMENDED MOVIES</b></h5>
                    <div className={styles.cardContainerRecommended}>
                        {
                            recommended.results.map(movie => {
                                return (
                                    <MovieCard key={movie.id} movie={movie} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.recommendedContainer}>
                    <h5 className={styles.info}><b>SIMILAR MOVIES</b></h5>
                    <div className={styles.cardContainerRecommended}>
                        {
                            similar.results.map(movie => {
                                return (
                                    <MovieCard key={movie.id} movie={movie} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};