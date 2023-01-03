import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pevt9d8', 'template_55q4pcj', form.current)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  

  return (
    
    
    <form ref={form} onSubmit={sendEmail}>
                <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
</script>
<script type="text/javascript">
   (function(){
      emailjs.init("dCdfu3tHgHcmwkb4q")
   })();
</script>
    
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    
  );
};
export default ContactUs;