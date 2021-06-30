let reportJokes=[];

let boto= document.getElementById("acudit");
let aplicaValoracio= document.getElementById("botoValora");

boto.addEventListener('click', cridarApi);
aplicaValoracio.addEventListener('click', mostraValoracio);

function veureAcudit(acudit){
    console.log('acudit descarregat:', acudit.joke)
    return acudit.joke
}

function cridarApi(){
    let respostaAcudit = fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
          }
    });
    respostaAcudit
    .then(response => response.json())
    .then(veureAcudit)
    .then(acuditPerPantalla)
    .then(mostraFormulariValoracio);
}

function acuditPerPantalla(acudit){
    document.getElementById('onapareixacudit').innerHTML = acudit;
}

function mostraFormulariValoracio(){
    let formulariElement = document.getElementById('formulari');
    formulariElement.classList.add('formulari-actiu');
}

function mostraValoracio(){

    let valorSeleccionat;

    let valorDolent= document.getElementById("valoracioDolent");
    let valorNormal= document.getElementById("valoracioNormal");
    let valorBo= document.getElementById("valoracioBo");

    if (valorDolent.checked===true){
        valorSeleccionat=valorDolent.value;
    } 
    if (valorNormal.checked===true){
        valorSeleccionat=valorNormal.value;
    }
    if (valorBo.checked===true){
        valorSeleccionat=valorBo.value;
    }

    let elementAcudit= document.getElementById('onapareixacudit');

    let objecteAcudit={
        joke:elementAcudit.innerHTML,
        score: valorSeleccionat,
        date: new Date(),
    }

    reportJokes.push(objecteAcudit);

    console.log(reportJokes);

}