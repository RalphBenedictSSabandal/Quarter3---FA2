function addition()
{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + (parseInt(num1) + parseInt(num2)) + ".";
}

function subtraction()
{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = "The difference of " + num1 + " and " + num2 + " is " + (parseInt(num1) - parseInt(num2)) + ".";
}

function multiplication()
{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = "The product of " + num1 + " and " + num2 + " is " + (parseInt(num1)*parseInt(num2)) + ".";
}

function division()
{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + (parseInt(num1)/parseInt(num2)) + ".";
}

function modulus()
{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = "The remainder of " + num1 + " and " + num2 + " is " + (parseInt(num1)%parseInt(num2)) + ".";
}

