console.log('fetch data');
// fetching data
let url = new Request('src/assets/data.json');
fetch(url)
    .then(response => {
        // console.log(response)
        return response.json();
    })
    .then(data => {
        cities = data.cities;
        months = data.months;
        // console.log(cities, months);
        showMonth();
        showCities();
    }).catch(err => {
    console.log(err);
    });