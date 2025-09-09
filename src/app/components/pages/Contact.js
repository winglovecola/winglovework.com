import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import ContactForm from '../../components/ui/contact-us/ContactForm';

export default function Form() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');


  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageStyle, setErrorMessageStyle] = useState('');


  const handleInputChange = (e) => {


    const inputType = e.target.name;
    const inputValue = e.target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'msg') {
      setMsg(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    //validate name
    if (!name || name.trim === '') {
      setErrorMessageStyle ({color:"red"});
      setErrorMessage('Name must be specify');
      return;
    }

    //validate email
    if (!validateEmail(email)) {
      setErrorMessageStyle ({color:"red"});
      setErrorMessage('Email is invalid');
      return;
    }

    //validate message
    if (!msg || msg.trim === '') {
      setErrorMessageStyle ({color:"red"});
      setErrorMessage('Message must be specify');
      return;
    } else if (msg.length < 20) {
      setErrorMessageStyle ({color:"red"});
      setErrorMessage('Message is too short');
      return;
    }

    //send mail using sendgrid api
    
    const emailData = {email: email, name: name, msg: msg};
  
    const response = await fetch('/api/email/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });
  
    if (response.ok) {
      setErrorMessageStyle ({color: "green", fontWeight: "bold"});
      setErrorMessage('Email send SUCCESSFULLY! Thank you!');
    } else {
      setErrorMessageStyle ({color:"red"});
      setErrorMessage('Failed to send email.');
    }

    //reset form
    setName('');
    setEmail('');
    setMsg('');

  };



  return (

    <section id="contact-me" className="content-section">

      <div id="contact-me-title" className="content-title">Contact Me</div>

      <div id="contact-me-content" >

        <div id="contact-info" className="contact-me-div">


          <div id="content-me-content">
            <h2>Contact Me:</h2><br/><br/>
            <ContactForm/>
          </div>


          <div>
            <h2>Contact Info:</h2><br/><br/>

            <h3>Email:</h3>
            <a href="mailto:winglovework@gmail.com" className="text-blue-600 underline">winglovework@gmail.com</a><br/><br/>

            <h3>Github:</h3>
            <a href="https://github.com/winglovecola" className="text-blue-600 underline">https://github.com/winglovecola</a><br/><br/>

            <h3>LinkedIn:</h3>
            <a href="https://www.linkedin.com/in/winglovecola" className="text-blue-600 underline">https://linkedin.com/in/winglovecola</a><br/><br/>
          </div>




        </div>
      </div>

    </section>

  );
}


