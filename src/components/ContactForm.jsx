import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const ContactForm = ({onSave}) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSabmit = (e) => {
      e.preventDefault();
      
      const form = e.target;
      const name = form.elements.name.value;
      const number = form.elements.number.value;
      console.log(name)
      console.log(number)
      
      if (contacts.items.find(contact => contact.name === name)) {
        alert(`${name} is already in contacts.`);
          return;
    };

  dispatch(addContact({ name, phone: number }));
      form.reset();
      onSave()
    };  

    return (
        <form onSubmit={handleSabmit}>
            <label htmlFor={nanoid()}>Name</label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
           
            <label htmlFor={nanoid()}>Number</label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            
            <button type='submit'>Add contact</button>
          </form>
    )
};

export default ContactForm;