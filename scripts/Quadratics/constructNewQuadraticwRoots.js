document.getElementById("calc").onclick = () => {
    let x1 = document.getElementById("root1").value || 0; 
    let x2 = document.getElementById("root2").value || 0; 

    // Koefisien a, b, dan c dari persamaan kuadrat
    let a = 1; // Misalkan koefisien a adalah 1
    let b = -x1 - x2; // Koefisien b adalah negatif jumlah akar-akar
    let c = x1 * x2; // Koefisien c adalah hasil kali akar-akar

    // Menyusun persamaan kuadrat
    let equation = `f(x) = ${a}x^2 + ${b}x + ${c}`;

    document.getElementById("new").innerText = equation;

    document.getElementById("delete").onclick = () => {
        document.getElementById("root1").value = null;
        document.getElementById("root2").value = null;

    document.getElementById("new").innerText = null;
    }
}