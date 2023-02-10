import styles from './HomePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchMovies } from '../store/actions/action-creator';
import MovieCard from '../components/MovieCard';
import ReactPaginate from 'react-paginate';

export default function HomePage() {
    const movies = useSelector((state) => {
        return state.movies;
    });
    const [loadingMovies, setLoadingMovies] = useState(true);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchMovies(currentPage))
            .then(() => {
                console.log('Success Fetch');
            })
            .catch((error) => {
                console.log('Fail Fetch', error);
            })
            .finally(() => {
                setLoadingMovies(false);
            });
    }, [currentPage]);
    if (loadingMovies) {
        return (
            <div>
                <h1 className={styles.loadingPage}>Loading Page...</h1>
            </div>
        );
    };

    const handlePageClick = (event) => {
        console.log(`User requested page number ${event.selected}`);
        setCurrentPage(event.selected + 1);
    };

    return (
        <div>
            <h5 className={styles.homeTitle}><b>NOW PLAYING</b></h5>
            <div className={styles.cardContainer}>
                {
                    movies.results.map(movie => {
                        return (
                            <MovieCard key={movie.id} movie={movie} />
                        )
                    })
                }
            </div>
            <div className={styles.pagination}>
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageCount={movies.total_pages}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    )
};