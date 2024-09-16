function AbreviaAmbiente(props) {
    const ambientes = (props.ambientes);
    const lugares = ambientes.split('-');
    lugares.splice(0,2)
    const salas = lugares.join('-');
    
    return (salas);
}

export default AbreviaAmbiente;