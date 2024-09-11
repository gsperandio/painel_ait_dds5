import Relogio from "./relogio";
import Saudacao from "./saudacao";
import styles from './Cabecalho.module.css';

function Cabecalho(){
    return(
        <div className={styles.cabecalho}>
            <Saudacao/>
            <Relogio/>
        </div>
    );
}

export default Cabecalho;