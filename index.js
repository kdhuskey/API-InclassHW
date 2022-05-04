const enteredZip = document.querySelector('.city')
const wxButton = document.querySelector('.get-wx')
const testZ = document.querySelector('.zip')


wxButton.addEventListener('click', function(e){
    e.preventDefault()
    const zipCode = testZ.value
    // console.log(zipCode)
    wxButton.innerText = `Here's what the day looks like`


fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=2ccbaf615c50480240e4b467b4aa60f4`)
.then(function(response){
    return response.json()
})
.then(function(data){
    const cloudIcon = data.weather[0].icon
    const clouds = data.weather[0].description
    const cloudInfo = `
    
    <blockquote><img src="http://openweathermap.org/img/wn/${cloudIcon}@2x.png">${clouds}</blockquote>
    
    
    `
    const Ktemp = data.main.temp
    const temp = Math.round(Ktemp -273.15) * (1.8) + 32
    

    const tempInfo = `
    <blockquote>${temp}°F</blockquote>
    `
    const windMps = data.wind.speed
    const wind = Math.round(windMps * 2.2369)

    const windInfo = `
    <blockquote>${wind} MPH</blockquote>
    `

    document.querySelector('.card-text').innerHTML = cloudInfo
    document.querySelector('.info-2').innerHTML = tempInfo
    document.querySelector('.info-3').innerHTML = windInfo
    
    })
})

// const wx = JSON.stringify(data.weather[0])

// https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}