function encontrarNumeroMasGrande(arreglo) {
    let numeroMasGrande = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] > numeroMasGrande) {
        numeroMasGrande = arreglo[i];
      }
    }
    return numeroMasGrande;
  }