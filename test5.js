function ordenarPorPropiedad(arreglo, propiedad) {
    if (typeof propiedad === 'string') {
        return arreglo.sort((a, b) => a[propiedad].localeCompare(b[propiedad]));
    }
    return arreglo.sort((a, b) => a[propiedad] - b[propiedad]);
}