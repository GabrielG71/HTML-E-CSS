function computeVote() {
    const optionInput = document.getElementById('option');
    const message = document.getElementById('message');
    const option = parseInt(optionInput.value);

    if (isNaN(option) || option < 1 || option > 6) {
        message.textContent = "Erro. Digite um número entre 1 e 6.";
        message.style.color = "red";
    } else {
        message.textContent = "Ok, seu voto foi computado.";
        message.style.color = "green";
    }
}