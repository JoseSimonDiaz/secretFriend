const friendsList = [];
const inputField = document.getElementById("amigo");
const friendsListElement = document.getElementById("listaAmigos");
const resultElement = document.getElementById("resultado");

function agregarAmigo() {
  const name = inputField.value.trim();

  if (name === "") {
    alert("Por favor, ingrese un nombre válido");
    return;
  }

  friendsList.push(name);
  renderizarLista();
  inputField.value = "";
  inputField.focus();
}


function renderizarLista() {
  friendsListElement.innerHTML = ""; 

  friendsList.forEach((friend, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${friend}`;
    friendsListElement.appendChild(listItem);
  });
}

function sortearAmigo() {
  if (friendsList.length === 0) {
    alert("La lista está vacía. Por favor, agregue al menos un nombre.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * friendsList.length);
  const selectedFriend = friendsList[randomIndex];

  mostrarResultado(selectedFriend);
}

function mostrarResultado(name) {
  resultElement.innerHTML = ""; 

  const resultItem = document.createElement("li");
  resultItem.textContent = `El amigo secreto es: ${name}`;
  resultElement.appendChild(resultItem);
}
