
function calculate() {
    let a = document.getElementById("bill").value;
    let b = document.getElementById("customTip").value
    let c = document.getElementById("people").value;


    if (a && b && c && parseFloat(c) != 0) {
        let tipAmount = (a * b / 100) / c;
        let totalAmount = parseFloat(a) + (a * b / 100);

        document.getElementById("tip-amount").innerText = (a * b / 100);
        document.getElementById("total-amount").innerText = totalAmount.toFixed(2);
        document.getElementById("tip-amount-person").innerText = ((a * b / 100) / c).toFixed(2);
        document.getElementById("total-amount-person").innerText = (totalAmount / c).toFixed(2);
    } else {
        alert("Please provide valid inputs for bill amount, tip percentage, and number of people.");
    }
}



function reset() {
    document.getElementById("bill").value = "";
    document.getElementById("customTip").value = "";
    document.getElementById("people").value = "";
    document.getElementById("tip-amount").innerText = "0.00";
    document.getElementById("total-amount").innerText = "0.00";
    document.getElementById("tip-amount-person").innerText = "0.00";
    document.getElementById("total-amount-person").innerText = "0.00";  
}
