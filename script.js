function convertToFar() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("result").textContent = celsius + "°C is " + fahrenheit.toFixed(2) + "°F";
    } else {
        document.getElementById("result").textContent = "Please enter a valid temperature.";
    }
}
