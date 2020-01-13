console.log('selectmonth.js');
function selectMonth(){
    let monthTitle = document.querySelectorAll('.month-title');
    // console.log(monthTitle);
    monthTitle.forEach(month => {
        month.addEventListener('click', ()=>{
            displayMonth.innerHTML = `<span>${month.innerText}</span>`
            showDate.innerHTML = '';
            if(month.innerText == 'January'  || month.innerText == 'March' || month.innerText == 'May' || month.innerText == 'July' || month.innerText == 'August' || month.innerText == 'October' || month.innerText == 'December'){
                for(i=1; i < 32 ; i++){
                    // let dateElement = document.createElement('span');
                    showDate.innerHTML += `<div class='date'>${i}</div>`;
                // showDate.appendChild(dateElement);
                }
            }else if(month.innerText == 'February'){
                for(i=1; i < 29 ; i++){
                    showDate.innerHTML += `<div class='date'>${i}</div>`;
                }
            }else{
                for(i=1; i < 31 ; i++){
                    showDate.innerHTML += `<div class='date'>${i}</div>`;
                }
            }
            selectDate();
        })
    })

}
selectMonth();