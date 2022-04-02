let temperature = document.querySelector(".temperature")

let countrys = document.querySelector(".country")
let names = document.querySelector(".name")
let description = document.querySelector(".description")
let degree = document.querySelector(".degree")
let feelsLikes = document.querySelector(".feelsLike")
let visibilitys = document.querySelector(".visibility")
let flash = document.querySelectorAll(".flash")
let line = document.querySelectorAll(".line")
let listen = document.getElementById("listen")

let input = document.getElementById("input")
input.addEventListener("input", async (e) => {
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=b4c40c9560455f7c1458b63bbfeb2560`;


        let response = await fetch(url)
        let data = await response.json()
        let { main, icon } = data.weather[0]
        let { temp, feels_like, humidity } = data.main
        let { visibility } = data
        let { name } = data
        let images = "http://openweathermap.org/img/w/" + icon + ".png"


        countrys.innerHTML = "Country: " + data.sys.country
        names.innerHTML = "Name:  " + name
        description.innerHTML = "Weather:    " + main

        degree.innerHTML = "Degree:    " + Math.floor(temp - 271.14);
        feelsLikes.innerHTML = "Feels Like:    " + Math.floor(feels_like - 271.14)
        visibilitys.innerHTML = "Visibility: " + visibility
        temperature.innerHTML = `
    ${Math.floor(temp - 271.14)}<sup>o</sup>
    `
       pass(name,main,temp)
    }
    catch (error) {
        dontShow()
    }
    animate()
});




function animate() {

    flash.forEach((f, i) => {
        f.classList.add("flashAnimation")
        f.style.animationDelay = `${i * 0.14}s`
    })
}

line.forEach((l, i) => {
    l.style.animationDelay = `${0.28 * i}s`
})



function dontShow() {
    countrys.style.display = "none"
    names.style.display = "none"
    description.style.display = "none"
    degree.style.display = "none"
    visibilitys.style.display = "none"
    feelsLikes.style.display = "none"
    temperature.style.display = "none"

    setTimeout(() => {
        countrys.style.display = "block"
        names.style.display = "block"
        description.style.display = "block"
        degree.style.display = "block"
        visibilitys.style.display = "block"
        feelsLikes.style.display = "block"
        temperature.style.display = "block"
    }, 1000);
}


let speech = document.querySelector(".speech")

    function pass(name,main,temp){
      
        speech.innerHTML=`
        
        in ${name} the temperature is ${Math.floor(temp - 271.14)}deg celsius and weather condition is ${main} 
    
        
        `
        let speaks = new SpeechSynthesisUtterance(`in ${name} the temperature is ${Math.floor(temp - 271.14)}deg celsius and weather condition is ${main} 
    
        
        `)
        speechSynthesis.speak(speaks)
       speech.classList.add("speechShow")
        setTimeout(()=>{
            speech.classList.remove("speechShow")
        },5000)
    
    }

