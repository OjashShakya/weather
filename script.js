// Student Name: Ojash Shakya
// Student Id: 2408654

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon")
const input = document.querySelector("input")

// Using function to fetch the API
async function checkWeather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=a47c1980d7a079e229f36a4a6e7ffb5c`)

    // Display weather for valid city name
    try{
        var data = await response.json();
        console.log(data)

        // Fetching data from the API and displaying the data
        document.querySelector(".city").innerHTML = data.name + ", " + data.sys.country;
        document.querySelector(".temp_data").innerHTML = Math.round(data.main.temp) + "<sup>°c</sup>";
        document.querySelector(".wind_data").innerHTML = data.wind.speed + " km/hr";
        document.querySelector(".humidity_data").innerHTML = data.main.humidity + "%";
        document.querySelector(".visibility_data").innerHTML = (data.visibility)/1000 + " km";
        document.querySelector(".pressure_data").innerHTML = data.main.pressure + " hPa";

        // Converting Timezone
        t = new Date()
        localTime = t.getTime()
        localOffset = t.getTimezoneOffset() * 60000
        utc = localTime + localOffset
        var time = utc + (1000 * data.timezone)
        nt = new Date(time)

        // Converting Timezone to 24-hour format
        let hour = (nt.getHours());
        let minutes = nt.getMinutes();
        let weekday = nt.toLocaleString('default', { weekday: 'long' });
        let month = nt.toLocaleString('default', { month: 'long' });
        let date = nt.getDate();

        // Display day, date and time
        document.querySelector(".time").textContent = `${weekday} | ${month} ${date}, ${hour.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}`;

        // Various weather condition and their description
        if(data.weather[0].main == "Clouds"){
            if ((hour > 5) && (hour < 20)){
                if(data.main.temp >= 10){
                    weatherIcon.src = "https://github.com/OjashShakya/Weather-API-Assets/blob/main/Images/Icons/day_cloudy.png?raw=true"
                    document.querySelector(".description").innerHTML = "Partly Cloudy";
                    document.querySelector("body").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/partly_sunny.png)";
                    document.querySelector(".weather").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/partly_sunny.png)";
    
                }
                else{
                    weatherIcon.src = "https://github.com/OjashShakya/Weather-API-Assets/blob/main/Images/Icons/cloudy.png?raw=true"
                    document.querySelector(".description").innerHTML = "Mostly Cloudy";
                    document.querySelector("body").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/mostly_cloudy.jpg)";
                    document.querySelector(".weather").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/mostly_cloudy.jpg)";
                }
            }
            else{
                weatherIcon.src = "https://github.com/OjashShakya/Weather-API-Assets/blob/main/Images/Icons/night_cloudy.png?raw=true"
                document.querySelector(".description").innerHTML = "Partly Cloudy";
                document.querySelector("body").style.backdropFilter = "blur(200px)";
                document.querySelector("body").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/night.jpg)";
                document.querySelector(".weather").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/night.jpg)";
            }
        }

        else if(data.weather[0].main== "Clear"){
            if ((hour > 5) && (hour < 20)){
                if(data.main.temp > 10){
                    weatherIcon.src = "https://github.com/OjashShakya/Weather-API-Assets/blob/main/Images/Icons/day.png?raw=true"
                    document.querySelector(".description").innerHTML = "Mostly Sunny";
                    document.querySelector("body").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/sunny.png)";
                    document.querySelector(".weather").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/sunny.png)";
                }
                else{
                    weatherIcon.src = "https://github.com/OjashShakya/Weather-API-Assets/blob/main/Images/Icons/day_cloudy.png?raw=true"
                    document.querySelector(".description").innerHTML = "Partly Sunny";
                    document.querySelector("body").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/partly_sunny.png)";
                    document.querySelector(".weather").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/partly_sunny.png)";                         
                }  
            }
            else{
                weatherIcon.src = "https://github.com/OjashShakya/Weather-API-Assets/blob/main/Images/Icons/night.png?raw=true"
                document.querySelector(".description").innerHTML = "Clear Sky";
                document.querySelector("body").style.backdropFilter = "blur(200px)";
                document.querySelector("body").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/night.jpg)";
                document.querySelector(".weather").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/night.jpg)";
            }

        }

        else if(data.weather[0].main == "Mist" || data.weather[0].main == "Drizzle"){
            weatherIcon.src = "https://github.com/OjashShakya/Weather-API-Assets/blob/main/Images/Icons/mist.png?raw=true"
            document.querySelector(".description").innerHTML = "Mist";
            document.querySelector("body").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/mist.png)";
            document.querySelector(".weather").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/mist.png)";
        }

        else if(data.weather[0].main == "Smoke"){
            weatherIcon.src = "https://github.com/OjashShakya/Weather-API-Assets/blob/main/Images/Icons/smoke.png?raw=true"
            document.querySelector(".description").innerHTML = "Smoke";
            document.querySelector("body").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/smoke.jpg)";
            document.querySelector(".weather").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/smoke.jpg)";
        }

        else if(data.weather[0].main == "Haze"){
            weatherIcon.src = "https://github.com/OjashShakya/Weather-API-Assets/blob/main/Images/Icons/smoke.png?raw=true"
            document.querySelector(".description").innerHTML = "Haze";
            document.querySelector("body").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/haze.png)";
            document.querySelector(".weather").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/haze.png)";
        }
        
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "https://github.com/OjashShakya/Weather-API-Assets/blob/main/Images/Icons/rain.png?raw=true"
            document.querySelector(".description").innerHTML = "Rainy";
            document.querySelector("body").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/rain.png";
            document.querySelector("body").style.backdropFilter = "blur(200px)";
            document.querySelector(".weather").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/rain.png)";
        }

        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "https://github.com/OjashShakya/Weather-API-Assets/blob/main/Images/Icons/snow.png?raw=true"
            document.querySelector(".description").innerHTML = "Snowing";
            document.querySelector("body").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/mostly_cloudy.jpg)";
            document.querySelector(".weather").style.backgroundImage="url(https://raw.githubusercontent.com/OjashShakya/Weather-API-Assets/main/Images/Background/mostly_cloudy.jpg)";
        }
    }
    // Display error for invalid city name
    catch{
        alert("Invalid city name!")
    }
}

// Using click event listener
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

// Using keyup event listener
input.addEventListener('keyup', (e)=>{
    if(e.key === 'Enter'){
        // console.log("Inside  keyup function")
        checkWeather(searchBox.value);
    }
});
// Setting assigned city 
checkWeather("bilbao");