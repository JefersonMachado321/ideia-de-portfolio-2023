import styles from './Contato.module.css';
import {
  BsInstagram,
  BsYoutube,
  BsGithub,
  BsLinkedin,
  BsWhatsapp,
} from 'react-icons/bs';
function Contato() {
  return (
    <>
      <section className={styles.contato}>
        <h1>Contato</h1>
        <h2>Entre em contato</h2>
        <p>Para conversamos mais sobre.</p>
        <div className={styles.icones}>
          <a
            href="https://www.instagram.com/jefersonmachado321"
            target="=_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className={styles.icone} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCeuiU4K7UPFwGNoKNDbUChQ"
            target="=_blank"
            rel="noopener noreferrer"
          >
            <BsYoutube className={styles.icone} />
          </a>

          <a
            href="https://github.com/JefersonMachado321?tab=projects"
            target="=_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className={styles.icone} />
          </a>

          <a
            href="https://www.linkedin.com/in/jeferson-machado-35150b121/"
            target="=_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className={styles.icone} />
          </a>

          <a
            href="https://acesse.one/gxfK9"
            target="=_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp className={styles.icone} />
          </a>
        </div>
      </section>
    </>
  );
}

export default Contato;
