// form списка городов
const city_array = {Київ:'Kyiv',
Одеса: 'Odesa',
Житомир: 'Zhytomyr',
Черкаси: 'Cherkasy',
Чернігів: 'Chernihiv',
Чернівці:'Chernivtsi',
Хмельницький: 'Khmelnytskyi',
Херсон: 'Kherson',
Харків: 'Kharkiv',
Тернопіль: 'Ternopil',
Суми: 'Sumy',
Рівне: 'Rivne',
Полтава: 'Poltava',
Миколаїв: 'Mykolaiv',
Львів: 'Lviv',
Луганськ: 'Luhansk',
Кіровоград: 'Kirovohrad',
'Івано-Франківськ': 'Ivano-Frankivsk',
Запоріжжя: 'Zaporizhzhia',
Ужгород: 'Uzhhorod',
Донецьк: 'Donetsk',
Дніпропетровськ: 'Dnipropetrovsk',
Луцьк: 'Lutsk',
Вінниця: 'Vinnytsia',
Сімферополь: 'Simferopol',
Севастополь: 'Sevastopol',
}

let name_of_city = []


for (let key in city_array){
    name_of_city.push(key)
    let qwe = city_array[key];
}

const city = document.querySelector(".city_name")
const vibranii_gorod = document.querySelector('#spisok_city')
const div_panel = document.querySelector("#Panel_vybora")
const temperature = document.querySelector("#Temperature")


const panel_gorodov = function goroda(city){
    const spisok = document.querySelector('#spisok_city');
    city.forEach(vipad_spisok);
    function vipad_spisok(nasvanie){    
        const vibor_city = `<option value="${nasvanie}">${nasvanie}</option>`;
        spisok.insertAdjacentHTML("afterbegin", vibor_city);}
}


panel_gorodov(name_of_city)
city.addEventListener('submit',vibor_goroda)


function vibor_goroda(event){
    event.preventDefault();
    let gorod = vibranii_gorod.value;
    async function getTemperature1(City){
        try{
            let weather = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${City}&appid=b96a406848b2d0f62e297668ecb77254`;
            const response = await fetch(weather, {method:'GET'});
            const data = await response.json();
            const temp_in_city = data.main.temp - (data.main.temp % 1);
            temperature.innerText = '';
            temperature.classList.add('Temperature-hot');
            temperature.innerText = `Температура в місті ${gorod} - ${temp_in_city}⁰`;
            console.log(data)
        } catch(err){
            console.log(err)
        }
    
    }
    getTemperature1(city_array[gorod])
}



