console.log('selectcity.js');
function selectCity(){
    let cityTitle = document.querySelectorAll('.city-title');
    // console.log(cityTitle.length);
    cityTitle.forEach(city => {
    // let city = cityTitle[i];
    city.addEventListener('click', ()=>{
        displayCity.innerHTML = `<p>${city.innerText}</p>`;
        // console.log(city.innerText);
    })
})
}