let boto= document.getElementById("acudit");

boto.addEventListener('click', cridarApi);

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
}

function acuditPerPantalla(acudit){
    document.getElementById('onapareixacudit').innerHTML = acudit;
}