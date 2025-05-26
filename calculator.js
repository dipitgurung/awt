
let num1=prompt("enter frist number");
let num2 = prompt("enter second number");

console.log(sum(num1, num2));
console.log(diff(num1,num2));
console.log(divide(num1,num2));


function sum(num1,num2)
{
    return num1 + num2;
}

function diff(num1,num2)
{
    return num1 - num2;
}

function divide(num1,num2)
{
    return num1 / num2;
}


