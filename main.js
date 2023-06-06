// 1)Factorial Number(forEach)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let fact = 1;
numbers.forEach(function (number) {
    fact = fact * number;
    document.write("Factorial of" + " " + number + " " + "is" + " " + "=" + fact, "<br>");
})