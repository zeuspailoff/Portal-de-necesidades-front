import './Contact.css'
import { useState } from 'react';

const Contact = () => {

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    description: ''
  });

  const { fullname, email, phone, description } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    setFormData({
      fullname: '',
      email: '',
      phone: '',
      description: ''
    });
  };

  return (
    <div>
      <h1 className='titleMovement'>Contact us</h1>
      <p className='contact-help'>We are here to help you with any doubts</p>
      <form onSubmit={handleForm}>
        <input
          name="fullname"
          placeholder="Full name"
          type="text"
          value={fullname}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          type="text"
          value={email}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone"
          type="tel"
          value={phone}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Write your message"
          type="text"
          value={description}
          onChange={handleChange}
        />
        <button className='contact-button' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;