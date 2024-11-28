// Función para realizar las operaciones matemáticas
function realizarOperacion(num1, num2, operacion) {
    switch (operacion) {
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicacion":
            return num1 * num2;
        case "division":
            if (num2 === 0) {
                return "Error: División por cero no permitida.";
            }
            return num1 / num2;
        default:
            return "Operación no válida.";
    }
}

// Función para calcular el resultado
function calcular() {
    // Declaración explícita de las variables
    let num1 = parseFloat(document.getElementById("num1").value);  // Obtiene el primer número
    let num2 = parseFloat(document.getElementById("num2").value);  // Obtiene el segundo número
    let operation = document.getElementById("operation").value;   // Obtiene la operación seleccionada

    // Validar que los números sean válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }

    // Declaración de la variable resultado
    let resultado = realizarOperacion(num1, num2, operation);  // Calcula el resultado usando la función

    // Muestra el resultado en la interfaz
    document.getElementById("result").innerText = `Resultado: ${resultado}`;
}

// Función para permitir que el usuario realice otra operación
function continuarOperacion() {
    // Limpiar los campos de entrada
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operation").value = "suma";  // Restablecer operación a suma por defecto
    document.getElementById("result").innerText = "Resultado: ";  // Limpiar resultado mostrado
}

// Función para salir de la calculadora
function salir() {
    // Mostrar un mensaje de despedida
    alert(`Gracias por usar la calculadora.¡Hasta luego!    
NOTA: Si desea volver a realizar operaciones, refresque la página :)`);

    // Deshabilitar los botones para que el usuario no pueda interactuar más
    document.getElementById("calculateBtn").disabled = true;
    document.getElementById("continueBtn").disabled = true;
    document.getElementById("exitBtn").disabled = true;

    // Limpiar los campos de entrada y el resultado
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operation").value = "suma";
    document.getElementById("result").innerText = "Resultado: ";
}

// Event listeners para los botones
document.getElementById("calculateBtn").addEventListener("click", calcular); // Llama a la función calcular
document.getElementById("continueBtn").addEventListener("click", continuarOperacion); // Llama a la función continuarOperacion
document.getElementById("exitBtn").addEventListener("click", salir); // Llama a la función salir


