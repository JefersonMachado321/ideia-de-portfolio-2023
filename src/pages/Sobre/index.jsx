import styles from './Sobre.module.css';

import LauraImg from './imagen-icon/lauraImg.jpg';
import Css from './imagen-icon/icon-css.svg';
import Html from './imagen-icon/icon-html.svg';
import JavaScript from './imagen-icon/icon-js.svg';
import NodeJs from './imagen-icon/icon-node.svg';
import ReactJs from './imagen-icon/icon-react.svg';
import Sql from './imagen-icon/icon-sql.svg';

function Sobre() {
  return (
    <>
      <div className={styles.Sobre_Bg}>
        <div className={styles.Sobre_Perfil}>
          <img src={LauraImg} alt="foto da minha filha laura" />
        </div>
        <div className={styles.Sobre_Desc}>
          <h1>🧑🏽‍💻</h1>
          <p>
            Sou <span>Jeferson Machado</span>
            <br />
            <strong>Dev Full Stack</strong>
          </p>
          <p>Trabalho com desenvolvimento Web Desde 2021</p>
          <p>Sou Apaixonado por transformar ideias em realidade digital.</p>
          <p>
            Especializado em criação de aplicações dinâmicas e intuitivas,com
            foco na experiência do usuário
          </p>
        </div>
      </div>

      <div className={styles.Sobre_Icons}>
        <h1>Techs</h1>
        <div className={styles.Sobre_IconImg}>
          <img src={Css} alt="icone do CSS" />
          <img src={Html} alt="icone do Html" />
          <img src={JavaScript} alt="icone do JavaScript" />
          <img src={NodeJs} alt="icone do NodeJs" />
          <img src={ReactJs} alt="icone do ReactJs" />
          <img src={Sql} alt="icone do SQL" />
        </div>
      </div>
    </>
  );
}

export default Sobre;
