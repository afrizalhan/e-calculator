const operators = document.querySelectorAll(".operate");
    const holder = document.querySelector(".holder")
    const screen = calculatorForm.evalresult.value;
    let resultDisplayed = false;
    operators.forEach((operator) => {
        operator.addEventListener("click", function(e){
            const operation = e.target.value;
            if (holder.innerHTML == "" || resultDisplayed) {
                holder.innerHTML = calculatorForm.evalresult.value;
            } else {
                holder.innerHTML += calculatorForm.evalresult.value;
            }
            calculatorForm.evalresult.value = 0
        });
    });

    function getResult(){
        const holder = document.querySelector(".holder");
        const exp = holder.innerHTML += calculatorForm.evalresult.value;
        calculatorForm.evalresult.value = eval(exp);
        resultDisplayed = true;
    }
    function valuecal(result){
        if (calculatorForm.evalresult.value == 0) {
            calculatorForm.evalresult.value = result; 
        } else {
            calculatorForm.evalresult.value = calculatorForm.evalresult.value + result;
        }
        if (result == 'AC') {
            calculatorForm.evalresult.value = 0;
            holder.innerHTML = "";
        }
    }
    function calculatePercent() {
        if (calculatorForm.evalresult.value == 0) {
            alert("Masukkan sebuah angka")
        } else {
            let result
            result = calculatorForm.evalresult.value / 100
            calculatorForm.evalresult.value = result
        }
    }