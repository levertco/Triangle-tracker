function triangleTracker() {
    var sideAB = parseInt(document.getElementById("sideAB").value);
    var sideAC = parseInt(document.getElementById("sideAC").value);
    var sideBC = parseInt(document.getElementById("sideBC").value);

    if (sideAB === sideAC && sideAB === sideBC) {
        alert("An Equilateral triangle");
    } else if (sideAB == sideAC && sideAB !== sideBC) {
        alert("Isosceles triangle");
    } else if (sideAB == sideBC && sideAB !== sideAC) {
        alert("Isosceles triangle");
    } else if (sideAC == sideBC && sideAC !== sideAB) {
        alert("Isosceles triangle");
    } else if (sideAB !== sideAC && sideAB !== sideBC) {
        alert("Scalene triangle");
    } else if (twoSides1 <= sideBC || twoSides2 <= sideAC || twoSides3 <= sideAB) {
        alert("Not a triangle.");
    } else {
        alert("Not a triangle.");
    }
}
