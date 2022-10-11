const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const name = document.querySelector('#name').value.trim();

    if (email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ email, password, name }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('Account created');
        const signIn = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
          });
        if (signIn.ok) {
            alert('signed in');
            document.location.replace('/');
        }
      } else {
        alert('Unable to create account');
      }
    }
  };
 
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);

  