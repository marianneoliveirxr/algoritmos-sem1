function contemElemento(frutas, buscar){
    let encontrei = false;

    for(let i = 0; i < frutas.length; i++){
        if (frutas[i] == buscar){
            encontrei = true;
        }

        return encontrei;
    }
}

function buscarPrimeiraPosicao(frutas, buscar){
    let encontrado = false;

    for(let i = 0; i < frutas.length; i++){
        if(frutas[i] == buscar){
            encontrado = true
            return i;
        }
    }
    return -1;
}

function buscarUltimaPosicao(frutas, buscar){
    let encontrado = false;

    for(let i = frutas.length - 1; i > 0; i++){
        if(frutas[i] == buscar){
            encontrado = true
            return i;
        }
    }
    return -1;
}

function concatenar(doces, salgados) {
    let dispensa = [];

    for (let i = 0; i < doces.length; i++) {
        dispensa[i] = doces[i];
    }

    for (let i = 0; i < salgados.length; i++) {
        dispensa[doces.length + i] = salgados[i];
    }

    return dispensa;

}

function comparar(doces, doces2){

    let iguais = false;
    for (let i = 0; i < doces.length; i++){
        for (let j = 0; j < doces2.length; j++){
            if(doces[i] == doces2[i]){
                iguais = true;
            }
        }
    }

    return iguais;

}

function comparar(doces, salgados){

    let iguais = false;
    for (let i = 0; i < doces.length; i++){
        for (let j = 0; j < salgados.length; j++){
            if(doces[i] == salgados[i]){
                iguais = true;
            }
        }
    }

    return iguais;

}

