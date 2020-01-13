let monthContainer = document.querySelector('.month-container');
let cityContainer = document.querySelector('.city-container');
let displayCity = document.querySelector('.display-city');
let displayMonth = document.querySelector('.display-month');
let showDate = document.querySelector('.show-date');
let displayDate = document.querySelector('.display-date');
var cities = [];
var months = [];

// // fetching data
// let url = new Request('src/assets/data.json');
// fetch(url)
//     .then(response => {
//         // console.log(response)
//         return response.json();
//     })
//     .then(data => {
//         cities = data.cities;
//         months = data.months;
//         // console.log(cities, months);
//         showMonth();
//         showCities();
//     }).catch(err => {
//     console.log(err);
//     });


// function showMonth (){
//     months.forEach(month => {
//         // console.log(month);
//         let monthElement = document.createElement('div');
//         monthElement.innerHTML = `<h1 id='${month.id}' class='month-title'>${month.title}</h1>`;
//         monthContainer.appendChild(monthElement);  
//     })
// }

// function showCities (){
//     cities.forEach(city => {
//         // console.log(city.title);
//         let cityElement = document.createElement('div');
//         cityElement.innerHTML = `<h2 class='city-title' id=${city.id}>${city.title}</h2>`;
//         cityContainer.appendChild(cityElement);
//         selectCity();
//         selectMonth();
// })}




// function selectCity(){
//     let cityTitle = document.querySelectorAll('.city-title');
//     // console.log(cityTitle.length);
//     cityTitle.forEach(city => {
//     // let city = cityTitle[i];
//     city.addEventListener('click', ()=>{
//         displayCity.innerHTML = `<p>${city.innerText}</p>`;
//         // console.log(city.innerText);
//     })
// })
// }


// function selectMonth(){
//     let monthTitle = document.querySelectorAll('.month-title');
//     // console.log(monthTitle);
//     monthTitle.forEach(month => {
//         month.addEventListener('click', ()=>{
//             displayMonth.innerHTML = `<p>${month.innerText}</p>`
//             showDate.innerHTML = '';
//             if(month.innerText == 'January'  || month.innerText == 'March' || month.innerText == 'May' || month.innerText == 'July' || month.innerText == 'August' || month.innerText == 'October' || month.innerText == 'December'){
//                 for(i=1; i < 32 ; i++){
//                     // let dateElement = document.createElement('span');
//                     showDate.innerHTML += `<span class='date'>${i}</span>`;
//                 // showDate.appendChild(dateElement);
//                 }
//             }else if(month.innerText == 'February'){
//                 for(i=1; i < 29 ; i++){
//                     showDate.innerHTML += `<span class='date'>${i}</span>`;
//                 }
//             }else{
//                 for(i=1; i < 31 ; i++){
//                     showDate.innerHTML += `<span class='date'>${i}</span>`;
//                 }
//             }
//             selectDate();
//         })
//     })

// }

// function selectDate(){
//     let dates = document.querySelectorAll('.date');
//     // alert('hy');
//     // console.log(dates);
//     dates.forEach(date => {
//         date.addEventListener('click', ()=>{
//             displayDate.innerHTML = `${date.innerHTML}`
//             // console.log(date.innerHTML);
//         })
//     })
// }
