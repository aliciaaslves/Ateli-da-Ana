const form = document.querySelector("form");
const telefoneInput = document.getElementById("telefone");
const nomeInput = document.getElementById("nome");
const feedback = document.getElementById("feedback");

/* 🔒 TELEFONE: só números e formatação */
telefoneInput.addEventListener("input", function () {
  let valor = telefoneInput.value.replace(/\D/g, "");

  if (valor.length > 11) {
    valor = valor.slice(0, 11);
  }

  if (valor.length >= 2) {
    telefoneInput.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}${valor.length > 7 ? "-" + valor.slice(7) : ""}`;
  } else {
    telefoneInput.value = valor;
  }
});

/* 📤 VALIDAÇÃO + ENVIO */
form.addEventListener("submit", function (event) {
  feedback.textContent = "";
  feedback.style.color = "red";

  // 🔎 Nome válido
  if (nomeInput.value.trim().length < 3) {
    event.preventDefault();
    feedback.textContent = "Por favor, informe um nome válido.";
    nomeInput.focus();
    return;
  }

  // 🔎 Telefone válido (11 números)
  const telefoneNumeros = telefoneInput.value.replace(/\D/g, "");
  if (telefoneNumeros.length !== 11) {
    event.preventDefault();
    feedback.textContent = "Informe um telefone válido com DDD.";
    telefoneInput.style.border = "2px solid red";
    telefoneInput.focus();
    return;
  } else {
    telefoneInput.style.border = "";
  }

  // ✅ Sucesso visual
  feedback.style.color = "green";
  feedback.textContent = "Mensagem enviada com sucesso! Em breve entraremos em contato 💅";
});