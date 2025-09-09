import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import Button from '@/app/components/ui/Button';


const ContactForm = () => {

  const form = useRef<HTMLFormElement | null>(null);

  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [emailErrors, setEmailErrors] = useState<string>('');
  const [emailConfirmationMsg, setEmailConfirmationMsg] = useState<string>('');



  const sendEmail = async () => {

    setEmailConfirmationMsg('');
    setEmailErrors('');


    if (!form.current) {
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.current.emailTo.value)) {

      setEmailErrors('Invalid email address.');
      return;
    }

    if (form.current.message.value.length > 1000) {

      setEmailErrors('Message cannot be longer than 1000 characters.');

      return;
    }



    // Get the reCAPTCHA token

    const token = await recaptchaRef.current?.getValue();
    //console.log ('reCAPTCHA verification: ' + token);


    
    if (token) {
      // Proceed with sending the email if reCAPTCHA verification is successful
      
      if (form.current && process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID && process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {


        const phoneNumberHtml = form.current.phoneNumber.value ? `<br /><br /> Phone Number: ${form.current.phoneNumber.value}` : '';
        
        const emailHtmlTemplate = `Name: ${form.current.nameFrom.value}<br /><br /> Email: ${form.current.emailTo.value}${phoneNumberHtml} <br /><br /><br /> Message:<br /><pre>${form.current.message.value}</pre>`;
        
        emailjs
          .send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
            {
              nameTo: 'Paul',
              nameFrom: form.current.nameFrom.value,
              emailTo: form.current.emailTo.value,
              emailHtmlTemplate: emailHtmlTemplate,
              "g-recaptcha-response": token,
            },
            {
              publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            }
          )
          .then(
            () => {
              setEmailErrors('');
              setEmailConfirmationMsg(`Message sent successfully!\n\nThank you for contacting us.\nWe will get back to you as soon as possible.`);
              
              console.log('SUCCESS!');
            },
            (error) => {
              setEmailErrors(`Failed to sent message.\n\n` + error.text);
              setEmailConfirmationMsg('');
              
              
              console.log('FAILED...', error.text);
            },
          );
      }

    } else {
      console.log('reCAPTCHA verification failed');
    }
  };



  return (
   
    <form ref={form} className="w-full">

      <div className='flex flex-col justify-center items-start gap-4 text-2xl w-full'>
      
      <div className="w-full">
        <label className="block">Name</label>
        <input type="text" name="nameFrom" className="w-full" />
      </div>

      <div className="w-full">
        <label className="block">Email</label>
        <input type="email" name="emailTo" className="w-full" />
      </div>

      <div className="w-full">
        <label className="block">
          Phone Number <span className="text-gray-400">(Optional)</span>
        </label>
        <input type="tel" name="phoneNumber" className="w-full" />
      </div>

      <div className="w-full">
        <label className="block">Message</label>
        <textarea name="message" className="w-full" />
      </div>

        
        
        <ReCAPTCHA
          sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`} // Replace with your reCAPTCHA site key
          ref={recaptchaRef}
          onChange={(token: string | null) => setCaptchaToken(token)}
        />

        <div className='w-full'>
          {emailConfirmationMsg && <div className='text-2xl text-green-500 w-full text-center whitespace-pre-line'>{emailConfirmationMsg}</div>}
          {emailErrors && <div className='text-2xl text-red-500 w-full text-center whitespace-pre-line'>{emailErrors}</div>}
        </div>


        <Button
          variant='PRIMARY'
          type='button'
          className='text-white w-full !p-3'
          disabled={!captchaToken}
          onClick={sendEmail}
        >
          Send
        </Button>

      </div>
    </form>

  );
};


export default ContactForm;