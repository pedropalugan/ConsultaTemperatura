let lat;
let lon;
let temp;
let sens;
let max;
let min;
let clima;
let x = 1;
function verificarCord() {
    let city = document.getElementById("city").value
    let country = document.getElementById("country").value
    let state = document.getElementById("state").value
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=ecfa118ceb3df32494eb9d4f43d255c7`)
        .then((Response) => Response.json())
        .then((ready) => {
            lat = ready[0]['lat']
            lon = ready[0]['lon']
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ecfa118ceb3df32494eb9d4f43d255c7`)
                .then((Answer) => Answer.json())
                .then((pronto) => {
                    console.log(pronto)
                    temp = pronto['main']['temp'] - 273
                    sens = pronto['main']['feels_like'] - 273
                    max = pronto['main']['temp_max'] - 273
                    min = pronto['main']['temp_min'] - 273
                    clima = pronto['weather'][0]['main']
                    document.getElementById("temperatura").value = temp.toFixed(2) + 'C°'
                    document.getElementById("sensacao").value = 'Feels Like ' + sens.toFixed(2) + 'C°'
                    document.getElementById("temp_max").value = 'Maximum ' + max.toFixed(2) + 'C°'
                    document.getElementById("temp_min").value = 'Minimum ' + min.toFixed(2) + 'C°'
                    let img = document.getElementById("imagem");

                    if (clima == 'Thunderstorm' || clima == 'thunderstorm') {
                        img.src = "Images/thunderstorm.png"
                    }
                    else if (clima == 'Drizzle' || clima == 'drizzle' || clima == "Rain" || clima == "rain") {
                        img.src = "Images/rain.png"
                    }
                    else if (clima == "snow" || clima == "Snow") {
                        img.src = "Images/snow.png"
                    }
                    else if (clima == "mist" || clima == "Mist") {
                        img.src = "Images/mist.png"
                    }
                    else if (clima == "Smoke" || clima == "smoke") {
                        img.src = "Images/smoke.png"
                    }
                    else if (clima == "haze" || clima == "Haze") {
                        img.src = "Images/haze.png"
                    }
                    else if (clima == "dust" || clima == "Dust") {
                        img.src = "Images/dust.png"
                    }
                    else if (clima == "fog" || clima == "Fog") {
                        img.src = "Images/fog.png"
                    }
                    else if (clima == "sand" || clima == "Sand") {
                        img.src = "Images/sand.png"
                    }
                    else if (clima == "clear" || clima == "Clear") {
                        img.src = "Images/clear.png"
                    }
                    else if (clima == "clouds" || clima == "Clouds") {
                        img.src = "Images/clouds.png"
                    }

                })

        })
        .catch((erro)=> alert("Cidade não encontrada"))
}
