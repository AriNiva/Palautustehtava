function naytaEtusivu() {
    let etusivu = `<h1>Tervetuloa etusivulle!</h1>`
    document.getElementById("main_alue").innerHTML = etusivu;
}

function naytaYritystiedot() {
    let yritystiedot = `<h1>Yritystiedot</h1>
                   <p>Tässä on yrityksen tiedot</p>`
    document.getElementById("main_alue").innerHTML = yritystiedot;
}

function naytaYhteystiedot() {
    let yhteystiedot = `<h1>Yhteystiedot</h1>
                   <p>Tässä on yhteystiedot</p>`
    document.getElementById("main_alue").innerHTML = yhteystiedot;
}