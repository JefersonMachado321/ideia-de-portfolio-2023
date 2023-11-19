import styles from './Page404.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
function Page404() {
  return (
    <>
      <div className={styles.page404}>
        <h1 className={styles.titulo}>Algo de errado não está certo!</h1>
        <div className={styles.conteudoError}>
          <span>🛑404</span>
          <br />
          <strong>Página não localizada!</strong>
        </div>
      </div>
    </>
  );
}
export default Page404;
