export const getNomeTipo = (value) => {
    var arr = ['Consulta', 'Exame'];
    return arr[value - 1];
}

export const getNomeTipoLabel = (value) => {
    var arr = ['primary', 'secondary'];
    return arr[value - 1];
}