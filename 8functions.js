
//start of calculator

function add(){
    var var1 = document.getElementById("input1").value;
    var var2 = document.getElementById("input2").value;

    document.getElementById("Result").innerHTML = parseInt(var1) + parseInt(var2);
}

function minus(){
    var var1 = document.getElementById("input1").value;
    var var2 = document.getElementById("input2").value;

    document.getElementById("Result").innerHTML = var1 - var2;
}

function times(){
    var var1 = document.getElementById("input1").value;
    var var2 = document.getElementById("input2").value;

    document.getElementById("Result").innerHTML = var1 * var2;
}

function divide(){
    var var1 = document.getElementById("input1").value;
    var var2 = document.getElementById("input2").value;

    document.getElementById("Result").innerHTML = var1 / var2;
}

//end of calculator

//start of nightmodez
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 function whiteMode() {
    var element = document.body;
    element.classList.toggle("white-mode");
 }
//end of nightmodez

function cartBadge1() {
    var badge = document.getElementById("cartBadge").value;

    badge1++;
    document.getElementById("cartBadge").value;
}