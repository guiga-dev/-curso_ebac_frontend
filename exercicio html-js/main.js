document.getElementById('comparisonForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    // Obtém os valores dos campos
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const messageDiv = document.getElementById('message');
    
    // Validação
    if (campoB > campoA) {
        messageDiv.textContent = "Formulário válido! O número B é maior que o número A.";
        messageDiv.className = "message success";
        messageDiv.style.display = "block";
    } else {
        messageDiv.textContent = "Formulário inválido! O número B deve ser maior que o número A.";
        messageDiv.className = "message error";
        messageDiv.style.display = "block";
    }
});