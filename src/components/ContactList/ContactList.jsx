import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactListItem from "components/ContactListItem/ContactListItem";
import { selectContacts, selectFilter } from "redux/contacts/selectors";
import { getContacts } from "redux/contacts/operations";

const getFilteredContacts = (contacts, filter) => {
  const normilizedFilter = filter.toLowerCase();
    return contacts.items.filter(contact => 
      contact.name.toLowerCase().includes(normilizedFilter));
    };

const ContactList = () => {    
    
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
    const visibleContacts = getFilteredContacts(contacts, filter);
    
    useEffect(() => {
      dispatch(getContacts())
  }, [dispatch])

    return (
        <ul>
            {visibleContacts.map(({ name, phone, id }) => (
              <li key={id}>
                <ContactListItem 
                name={name}
                number={phone}
                id={id}
                 />
              </li>
            ))}
        </ul>
    )
};

export default ContactList;
