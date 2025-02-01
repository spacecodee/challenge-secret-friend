// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];

function addFriend() {
    const input = document.getElementById('amigo');
    const name = input.value.trim();

    if (!name) {
        alert('Por favor, inserte un nombre.');
        return;
    }

    friends.push(name);
    updateFriendsList();
    input.value = '';
}

function updateFriendsList() {
    const list = document.getElementById('listaAmigos');
    list.innerHTML = '';
    friends.forEach(friend => {
        const listItem = document.createElement('li');
        listItem.textContent = friend;
        list.appendChild(listItem);
    });
}

function raffleFriend() {
    const list = document.getElementById('listaAmigos');
    list.innerHTML = '';

    if (friends.length === 0) {
        alert('No hay amigos para sortear. Por favor, añade algunos amigos primero.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * friends.length);
    const secretFriend = friends[randomIndex];
    const result = document.getElementById('resultado');
    result.innerHTML = `El Amigo secreto sorteado es: ${secretFriend}`;
}