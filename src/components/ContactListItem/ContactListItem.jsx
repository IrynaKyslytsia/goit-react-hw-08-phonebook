import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";


const ContactListItem = ({ name, number, id }) => {
    const dispatch = useDispatch();

    return (
        <>
            <p>{name}: {number}</p>
            <button 
                type="submit" 
                onClick={() => {dispatch(deleteContact(id))}}>Delete</button>
        </>
     );
        };

export default ContactListItem;