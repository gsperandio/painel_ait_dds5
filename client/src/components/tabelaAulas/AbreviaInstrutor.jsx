function AbreviaInstrutor(props) {
    const nome = (props.nome);
    const inst = nome.split(' ');
    const nome_final = (inst[0] + ' ' + inst[inst.length-1]);
    
    return (nome_final);
}

export default AbreviaInstrutor