//ACCESS ALL THE WEBPAGE ELEMENTS
let txtNumber = document.getElementById('txtNumber');
let baseDDL = document.getElementById('base');
let convertBtn = document.getElementById('btnConvert');
let spanEl = document.getElementById('convertedValue');


//  Command to run project   --->   start index.html
convertBtn.addEventListener('click', function(){
    //Number, +, parseInt
    let num = +txtNumber.value;
    let base = +baseDDL.value;

    if(isNaN(num)){
        spanEl.textContent = 'Please enter a valid number.';
        spanEl.style.color = '#EF5350';
    } else {
        let convertedValue = num.toString(base);
        spanEl.textContent = convertedValue.toUpperCase();
        spanEl.style.color = '#81C784';
        spanEl.style.fontWeight = 'bold';
    }

})