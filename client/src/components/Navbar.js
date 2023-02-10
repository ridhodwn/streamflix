import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function NavbarAll() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/" className={styles.brandLink}>
                    <Navbar.Brand>StreamFlix</Navbar.Brand>
                </Link>
            </Container>
        </Navbar>
    );
};