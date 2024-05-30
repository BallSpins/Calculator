document.getElementById("calc").onclick = () => {
    let arr = [
        [document.getElementById("x1").value || 0, document.getElementById("y1").value || 0, document.getElementById("z1").value || 0, document.getElementById("c1").value || 0],
        [document.getElementById("x2").value || 0, document.getElementById("y2").value || 0, document.getElementById("z2").value || 0, document.getElementById("c2").value || 0],
        [document.getElementById("x3").value || 0, document.getElementById("y3").value || 0, document.getElementById("z3").value || 0, document.getElementById("c3").value || 0]
    ];

    console.log("log")
    
    // Extract the coefficients and constants from the array
    let [a, b, c, d] = arr[0];
    let [e, f, g, h] = arr[1];
    let [i, j, k, l] = arr[2];
    
    // Calculate the determinant of the coefficient matrix
    let D = a*(f*k - g*j) - b*(e*k - g*i) + c*(e*j - f*i);

    // If the determinant is zero, the system of equations has no unique solution
    if (D === 0) {
        return "The system of equations has no unique solution.";
    }

    // Calculate the determinants of the matrices obtained by replacing each column with the column vector of constants
    let Dx = d*(f*k - g*j) - b*(h*k - g*l) + c*(h*j - f*l);
    let Dy = a*(h*k - g*l) - d*(e*k - g*i) + c*(e*l - h*i);
    let Dz = a*(f*l - h*j) - b*(e*l - h*i) + d*(e*j - f*i);

    // The solutions are given by the ratios of these determinants to the determinant of the coefficient matrix
    let x = Dx / D;
    let y = Dy / D;
    let z = Dz / D;
    
    document.getElementById("X").innerText = x.toFixed(2);
    document.getElementById("Y").innerText = y.toFixed(2);
    document.getElementById("Z").innerText = z.toFixed(2);

    document.getElementById("delete").onclick = () => {
        //first linear
        document.getElementById("x1").value = null;
        document.getElementById("y1").value = null;
        document.getElementById("z1").value = null;
        document.getElementById("c1").value = null;

        //second linear
        document.getElementById("x2").value = null;
        document.getElementById("y2").value = null;
        document.getElementById("z2").value = null;
        document.getElementById("c2").value = null;

        //third linear
        document.getElementById("x3").value = null;
        document.getElementById("y3").value = null;
        document.getElementById("z3").value = null;
        document.getElementById("c3").value = null;

        document.getElementById("X").innerText = 0;
        document.getElementById("Y").innerText = 0;
        document.getElementById("Z").innerText = 0;
    }
}
