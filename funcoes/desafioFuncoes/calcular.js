function adicionarNoFinal(elementos, elemento) {
    let novoElementos = [];

    for (let i = 0; i < elementos.length; i++) {
        novoElementos[i] = elementos[i];
    }

    novoElementos[elementos.length] = elemento;

    return novoElementos;
}

function removerDoFinal(elementos){
    let novoElementos = [];

    for (let i = 0; i < elementos.length - 1; i++){
        novoElementos[i] = elementos[i];
    }
    
    return novoElementos;
}

function removerDoInicio(elementos){
    let novoElementos = [];

    for (let i = 1; i < elementos.length; i++) {
        novoElementos[i - 1] = elementos[i];
    }

    return novoElementos;
}

function adicionarNoInicio(elementos, elemento){
    let novoElementos = [];

    novoElementos[0]= elemento;

    for (let i = 0; i < elementos.length; i++){
        novoElementos[i + 1] = elementos[i];
    }

    return novoElementos;
}

function alterarLista(elementos, indice, quantidade, novoElemento) {
    let novo = [];

    if (indice > elementos.length) {
        indice = elementos.length;
    }
3
    if (quantidade == 0) {
        for (let i = 0; i < elementos.length; i++) {
            novo[novo.length] = elementos[i];
        }

        if (novoElemento !== "") {
            novo[novo.length] = novoElemento;
        }

        return novo;
    }

    for (let i = 0; i < indice; i++) {
        novo[novo.length] = elementos[i];
    }

    if (novoElemento !== "") {
        novo[novo.length] = novoElemento;
    }

    for (let i = indice + quantidade; i < elementos.length; i++) {
        novo[novo.length] = elementos[i];
    }

    return novo;
}