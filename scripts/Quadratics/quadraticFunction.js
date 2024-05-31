document.getElementById("calc").onclick = () => {
    let arr = [
        document.getElementById("a").value || 0,
        document.getElementById("b").value || 0,
        document.getElementById("c").value || 0
    ]

    //extracts from arr
    let [a, b, c] = arr;

    let discriminant = b**2 - 4*a*c;
    let root1 = Number((-b + Math.sqrt(discriminant)) / (2*a));
    let root2 = Number((-b - Math.sqrt(discriminant)) / (2*a));

    // Menentukan titik potong sumbu X dan sumbu Y
    let xIntercepts = [root1, root2];
    let yIntercept = c;

    // Menentukan persamaan sumbu simetri
    let axisOfSymmetry = -b / (2*a);

    // Menentukan titik puncak atau titik ekstrem
    let vertex = [axisOfSymmetry.toFixed(2), -discriminant / (4*a).toFixed(2)];

    document.getElementById("root1").innerText = root1.toFixed(2);
    document.getElementById("root2").innerText = root2.toFixed(2);
    document.getElementById("X1").innerText = xIntercepts[0].toFixed(2);
    document.getElementById("X2").innerText = xIntercepts[1].toFixed(2);
    document.getElementById("Y").innerText = yIntercept;
    document.getElementById("symmetry").innerText = axisOfSymmetry.toFixed(2);
    document.getElementById("vertex").innerText = vertex;


    document.getElementById("delete").onclick = () => {
        document.getElementById("a").value = null;
        document.getElementById("b").value = null;
        document.getElementById("c").value = null;

        document.getElementById("root1").innerText = 0;
        document.getElementById("root2").innerText = 0;
        document.getElementById("X1").innerText = 0;
        document.getElementById("X2").innerText = 0;
        document.getElementById("Y").innerText = 0;
        document.getElementById("symmetry").innerText = 0;
        document.getElementById("vertex").innerText = 0;
    }
}
