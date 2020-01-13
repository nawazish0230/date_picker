console.log('selectDate.js');
function selectDate(){
    let dates = document.querySelectorAll('.date');
    // alert('hy');
    // console.log(dates);
    dates.forEach(date => {
        date.addEventListener('click', ()=>{
            displayDate.innerHTML = `${date.innerHTML}`
            // console.log(date.innerHTML);
        })
    })
}