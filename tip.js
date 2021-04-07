function calculateTip(){
    var billAmt = document.getElementById("billamount").value;
    var service = document.getElementById("serviceQuali").value;
    var peopleamt = document.getElementById("peopleamt").value;

    if (billAmt === "" || service == 0){
        alert("Please enter values");
        return;
    }
    if (peopleamt ==="" || peopleamt <= 1){
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    var total = (billAmt * service) / peopleamt;
    total = Math.round(total*100)/ 100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("calculator").onclick = function(){
    calculateTip();
}