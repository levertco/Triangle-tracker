function triangle() {
    //array creation to store the sides
    var sides = [];

    sides.push(document.getElementById("num1").value);
    sides.push(document.getElementById("num2").value);
    sides.push(document.getElementById("num3").value);
    //input array values for variables a,b,c
    var [a, b, c] = sides;
    var display = document.getElementById("display");
    var explanation = document.getElementById("explanation");
    if (a.length === 0 || b.length === 0 || c.length === 0) {

        //Ensure all slots have values
        display.innerHTML = "<p>Fill in all my blank slots</p>"

    } else {
        //convert the strings to numbers
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);
        track(a, b, c);
    }
}

function track(a, b, c) {
    if (a + b > c && b + c > a && c + a > b) {
        if (a === b && a === c) {
            display.innerHTML = "<class='display-text'>I am an Equilateral triangle because all my sides turn out to be equal.";
        } else if (a === b || b === c || a === c) {
            display.innerHTML = "<class='display-text'>I am an isosceles triangle because two of my sides turn out to be equal.";
        } else {
            display.innerHTML = "<class='display-text'>I am a Scalene triangle because none of my sides are equal.";
        }
    } else if (isNaN(a) || isNaN(b) || isNaN(c)) {
        display.innerHTML = "<class='display-text'>NOT a Number>";
    } else {
        display.innerHTML = "<p class='display-text'>NOT a triangle because when you add my first and second side it should be greater than my third side</p>"
    }
}

function reset() {
    location.reload();
}
