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

async function fetchData() {
    var x = `<table><thead><th>ID</th><th>Nimi</th><th>Osoite</th><th>Puhelin</th></thead><tbody>`
    try {
        const response = await fetch("http://localhost:3000/api/henkilot")
        const henkilodata = await response.json()
        await henkilodata.map(h => {
            x += `<tr><td>${h.id}</td><td>${h.name}</td><td>${h.address}</td><td>${h.phone}</td></tr>`
        })
        x += `</tbody></table>`
        document.getElementById("main_alue").innerHTML = x
    }
    catch (error) {
        console.error("Error fetching data:", error)
    }
}
                 
                     