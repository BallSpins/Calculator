document.getElementById("calc").onclick = () => {
    let arr = [
        [document.getElementById("x1").value || 0, document.getElementById("y1").value || 0, document.getElementById("c1").value || 0],
        [document.getElementById("x2").value || 0, document.getElementById("y2").value || 0, document.getElementById("c2").value || 0]
    ];

    console.log("log")
    
    // Extract the coefficients and constants from the array
    let [a, b, c] = arr[0];
    let [d, e, f] = arr[1];
    
    // Calculate the determinant of the coefficient matrix
    let D = a * e - b * d;
    
    // If the determinant is zero, the system of equations has no unique solution
    if (D === 0) {
        return "The system of equations has no unique solution.";
    }
    
    // Calculate the determinants of the matrices obtained by replacing each column with the column vector of constants
    let Dx = c * e - b * f;
    let Dy = a * f - c * d;
    
    // The solutions are given by the ratios of these determinants to the determinant of the coefficient matrix
    let x = Dx / D;
    let y = Dy / D;
    
    document.getElementById("X").innerText = x.toFixed(2);
    document.getElementById("Y").innerText = y.toFixed(2);

    document.getElementById("delete").onclick = () => {
        document.getElementById("x1").value = null;
        document.getElementById("y1").value = null;
        document.getElementById("c1").value = null;
        document.getElementById("x2").value = null;
        document.getElementById("y2").value = null;
        document.getElementById("c2").value = null;

        document.getElementById("X").innerText = 0;
        document.getElementById("Y").innerText = 0;
    }
}
