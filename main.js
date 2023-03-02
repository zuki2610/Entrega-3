const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  localStorage.setItem('user', JSON.stringify({ email, password }));

  swal('¡Inicio de sesión exitoso!', '', 'success')
    .then(() => {
      window.location.href = './trivia/trivia.html';
    });
});

