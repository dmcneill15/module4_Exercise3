function clearResult(){
    document.getElementById("result").innerText = " ";
}

function getAnswer(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    //check which radio button was selected
    let selectedOp = getSelectedOperation();
    if(!selectedOp){
        return document.getElementById("result").innerText = "No operation selected";
    }
    else {
        let answer = calculateAnswer(num1,num2,selectedOp.value);
        return document.getElementById("result").innerText = answer;
    }
}

function getSelectedOperation(){
    let selectedOp = document.querySelector('input[name="operation"]:checked');
    return selectedOp;
}

function calculateAnswer(num1,num2, operation){
    if(operation == "add"){
        let answer = add(num1,num2);
        return answer;
    }
    if(operation == "subtract"){
        let answer = subtract(num1,num2);
        return answer;
    }
    if(operation == "divide"){
        let answer = divide(num1,num2);
        return answer;
    }
    if(operation == "multiply"){
        let answer = multiply(num1,num2);
        return answer;
    }
}

function add(num1, num2){
    return (num1+num2);
}

function subtract(num1,num2){
    return num1-num2;
}