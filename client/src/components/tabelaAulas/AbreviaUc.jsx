function AbreviaUc(props) {
    const materia = (props.materia);
    const unidade = materia.split(' ');
    const uc = (unidade[0].substring(0,4) + ' ' + unidade[unidade.lenght-3]);
  
    return (uc);
}

export default AbreviaUc;