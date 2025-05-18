document
  .querySelector('.login-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const { email, password } = this.elements;
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (!emailValue || !passwordValue) {
      alert('All form fields must be filled in');
      return;
    }

    const formData = {
      email: emailValue,
      password: passwordValue,
    };

    console.log(formData);
    this.reset();
  });
