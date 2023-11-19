import { Link } from 'react-router-dom';

import styles from './Home.module.css';
import imgPerfil1 from './developer-green.svg';

function Home() {
  return (
    <>
      <section className={styles.homeContainer}>
        <div className={styles.apresentacao}>
          <p>
            Olá, sou
            <br />
            <span>Jeferson Machado</span> <br /> Dev Full Stack
          </p>
          <Link to="/sobre">
            <button className={`${styles.btn} ${styles.btnGreen}`}>
              Saiba mais sobre min
            </button>
          </Link>
        </div>
        <figure>
          <img
            src={imgPerfil1}
            alt="imagem de um desenho caracterizado por um homem mechendo no computador"
          />
        </figure>
      </section>
    </>
  );
}
export default Home;
