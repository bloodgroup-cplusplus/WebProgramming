import React, { useState } from 'react';

const Form = () => {
  const [form, setForm] = useState({
    name: { value: '', valid: false },
    email: { value: '', valid: false },
    password: { value: '', valid: false },
    address:{value:'',valid:false}
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: { value, valid: true },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.name.valid && form.email.valid && form.password.valid) {
      // Do something with the form data
    } else {
      // Show an error message
    }
  };

  const isFormValid = form.name.valid && form.email.valid && form.password.valid;

  
};

export default Form;
