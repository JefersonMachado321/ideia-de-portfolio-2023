import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <>
      <header className={styles.menuBg}>
        <div className={styles.menu}>
          <div className={styles.logo}>
            <Link to="/">JefersonMachado.dev</Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/sobre">Sobre</Link>
              </li>
              <li>
                <Link to="/projetos">Projetos</Link>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
