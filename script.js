
   break;
        case "/":
            if (n2 === 0) {
                resultado.textContent = "No se puede dividir entre cero";
                return;
            }
            total = n1 / n2;
            break;
        default:
            resultado.textContent = "Operación no válida";
            return;
    }

    resultado.textContent = "Resultado: " + total;
}

function limpiar() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").textContent = "Resultado: 0";
}