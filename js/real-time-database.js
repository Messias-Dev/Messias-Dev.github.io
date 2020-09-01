var ip = document.getElementById('full-name');
var nome = document.getElementById('user-ip');
var telefone = document.getElementById('telephone');
var email = document.getElementById('email-address');
var addButton = document.getElementById('enviar-formulario');

function minusculo(){
    var emailFinal = email.toLowerCase();
}

const db = firebase.database();
const rootRef = db.ref('forms_users');

addButton.addEventListener('click', (teste) => {

    teste.preventDefault();

    const emailFinal = rootRef.push().key
    rootRef.child(emailFinal).set({

        ip: ip,
        nome: nome.value,
        telefone: telefone

    });

});

// updateButton.addEventListener('click', (teste) => {

//     teste.preventDefault();

//     const newData = {

//         age: age.value

//     };

// });
