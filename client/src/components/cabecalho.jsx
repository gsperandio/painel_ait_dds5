import Relogio from "./relogio";
import Saudacao from "./saudacao";

function Cabecalho(){
    return(
        <div>
            <Saudacao/>
            <Relogio/>
        </div>
    );
}

export default Cabecalho;