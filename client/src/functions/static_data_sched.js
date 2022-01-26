export const getNomeStatus = (value) => {
    var arr = ['Marcado', 'Confirmado', 'Cancelado'];
    return arr[value - 1];
}

export const getNomeStatusLabel = (value) => {
    var arr = ['default', 'primary', 'secondary'];
    return arr[value - 1];
}