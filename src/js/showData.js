console.log('show data.js');
function showMonth (){
    months.forEach(month => {
        // console.log(month);
        let monthElement = document.createElement('div');
        monthElement.innerHTML = `<p id='${month.id}' class='month-title'>${month.title}</p>`;
        monthContainer.appendChild(monthElement);  
    })
}

function showCities (){
    cities.forEach(city => {
        // console.log(city.title);
        let cityElement = document.createElement('div');
        cityElement.innerHTML = `<p class='city-title' id=${city.id}>${city.title}</p>`;
        cityContainer.appendChild(cityElement);
        selectCity();
        selectMonth();
})}