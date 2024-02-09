function naytaEtusivu() {
    let etusivu = `<h1>Tervetuloa Pöytälaatikko Oy:n sivuille!</h1>
                   <p>Täältä löydät tärkeää tietoa yrityksestämme.</p>`;
    document.getElementById("main_alue").innerHTML = etusivu;
}

function naytaYritysesittely() {
    let yritystiedot = `<h1>Yritysesittely</h1>
                        <p>Pöytälaatikko Oy on perustettu vuonna 2023 puhtaasti rikollisen toiminnan peittelyyn. 
                        Työntekijämme ovat täysin keksittyjä, eikä heitä ole oikeasti olemassa.
                        Jos olet asioinut kanssamme, sinua on viilattu linssiin, ja me olemme jo Bahamalla.</p>`;
    document.getElementById("main_alue").innerHTML = yritystiedot;
}

function naytaYhteystiedot() {
    let yhteystiedot = `<h1>Yhteystiedot</h1>
                        <p>Ei kai me nyt semmosia anneta.</p>`;
    document.getElementById("main_alue").innerHTML = yhteystiedot;
}

async function fetchData() {
    var x = `<table><thead><th>ID</th><th>Nimi</th><th>Osoite</th><th>Puhelin</th></thead><tbody>`;
    try {
        const response = await fetch("http://localhost:3000/api/henkilot");
        const henkilodata = await response.json();
        await henkilodata.map(h => {
            x += `<tr><td>${h.id}</td><td>${h.name}</td><td>${h.address}</td><td>${h.phone}</td></tr>`;
        });
        x += `</tbody></table>`
        document.getElementById("main_alue").innerHTML = x;
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
}
                 
                     