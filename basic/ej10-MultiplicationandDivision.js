function getNumbers() {
    const n1 = Number(document.getElementById("num1").value);
    const n2 = Number(document.getElementById("num2").value);
  
    if (!Number.isFinite(n1) || !Number.isFinite(n2)) {
      throw new Error("Ingresa dos números válidos.");
    }
  
    return { n1, n2 };
  }
  
  function setResult(text) {
    document.getElementById("result").textContent = text;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const btnMultiply = document.getElementById("btnMultiply");
    const btnDivide = document.getElementById("btnDivide");
  
    btnMultiply.addEventListener("click", () => {
      try {
        const { n1, n2 } = getNumbers();
        setResult(String(n1 * n2));
      } catch (err) {
        setResult(err.message);
      }
    });
  
    btnDivide.addEventListener("click", () => {
      try {
        const { n1, n2 } = getNumbers();
        if (n2 === 0) {
          setResult("No se puede dividir entre 0.");
          return;
        }
        setResult(String(n1 / n2));
      } catch (err) {
        setResult(err.message);
      }
    });
  });
