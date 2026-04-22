function validar(numero1, numero2){
    if (numero1 == null || numero1 == undefined){
        console.log(`numero 1 não pode ser nulo ou indefinido`);
        return;
    }
    if (numero2 == null || numero2 == undefined){
        console.log(`numero2 não pode ser nulo ou indefinido`);
        return;
    }
    
    if (typeof numero1 != "number"){
        console.log("tipo inválido para o argumento numero1");
        return;
    }
    if(typeof numero2 != "number"){
        console.log("tipo inválido para o argumento numero2");
        return;
    }

    return true;
}

function somar(numero1, numero2){
    if (!validar(numero1, numero2)){
        return;
    }

    return numero1 + numero2;
}

function calcularDistancia(x1, y1, x2, y2){
    if (x1 == null || x1 == undefined){
        console.log(`x1 não pode ser nulo ou indefinido`);
        return;
    }
    if (y1 == null || y1 == undefined){
        console.log(`y1 não pode ser nulo ou indefinido`);
        return;
    }

    if (x2 == null || x2 == undefined){
        console.log(`x2 não pode ser nulo ou indefinido`);
        return;
    }
    if (y2 == null || y2 == undefined){
        console.log(`y2 não pode ser nulo ou indefinido`);
        return;
    }
    
    if (typeof x1 != "number"){
        console.log("tipo inválido para o argumento x1");
        return;
    }
    if(typeof y1 != "number"){
        console.log("tipo inválido para o argumento y1");
        return;
    }

    if (typeof x2 != "number"){
        console.log("tipo inválido para o argumento x2");
        return;
    }
    if(typeof y2 != "number"){
        console.log("tipo inválido para o argumento y2");
        return;
    }

    return  (((x2 - x1) ** 2)+ ((y2 - y1) ** 2)) ** 0.5;
}

function converterParaHoraMinutoSegundo(numero){
    if (numero == null || numero == undefined){
        console.log(`numero não pode ser nulo ou indefinido`);
        return;
    }
    if(typeof numero != "number"){
        console.log("tipo inválido para o argumento numero");
        return;
    }

    let hora = Math.floor(numero / 3600);
    let minuto = Math.floor(numero % 3600 / 60);
    let segundo = Math.floor(numero % 60);

    let resultado = `${hora}:${minuto}:${segundo}`;
    return resultado;

}

function ePrimo(numero){
    if (numero == null || numero == undefined){
        console.log(`numero não pode ser nulo ou indefinido`);
        return;
    }
    if(typeof numero != "number"){
        console.log("tipo inválido para o argumento numero");
        return;
    }

    let divisores = 0;
    for(let i = 0; i <= numero; i++){
        if(numero % i == 0){
            divisores++;
        }
    }

    if (divisores == 2){
        return true;
    }
    else {
        return false;
    }
}


function calcularFatorial(numero){
    if (numero == null || numero == undefined){
        console.log(`numero não pode ser nulo ou indefinido`);
        return;
    }
    if(typeof numero != "number"){
        console.log("tipo inválido para o argumento numero");
        return;
    }

    let resultado = 1;
    for(let i = numero; i >= 1; i--){
        resultado *= i;
    }

    return resultado;


}

function calcularMedia(vetor){
    if (vetor == null || vetor == undefined){
        console.log(`vetor não pode ser nulo ou indefinido`);
        return;
    }
    if(!Array.isArray(vetor)){
        console.log("tipo inválido para o argumento vetor");
        return;
    }

    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (typeof vetor[i] !== "number" || isNaN(vetor[i])) {
            console.log("vetor contém valor inválido");
            return;
        }
        soma += vetor[i];
    }

    let media = soma / vetor.length;
    return media;
}

function calcularMediaPonderada(vetorMedias, vetorPesos){
    if (vetorMedias == null || vetorMedias == undefined){
        console.log(`numero não pode ser nulo ou indefinido`);
        return;
    }
    if(!Array.isArray(vetorMedias)){
        console.log("tipo inválido para o argumento numero");
        return;
    }
    if (vetorPesos == null || vetorPesos == undefined){
        console.log(`numero não pode ser nulo ou indefinido`);
        return;
    }
    if(!Array.isArray(vetorPesos)){
        console.log("tipo inválido para o argumento numero");
        return;
    }

    
    for (let i = 0; i < vetorMedias.length; i++) {
        
    }

    let media = soma / vetor.length;
    return media;



}