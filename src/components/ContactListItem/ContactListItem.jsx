import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import css from './ContactListItem.module.css'

const ContactListItem = ({ name, number, id }) => {
    const dispatch = useDispatch();

    return (
        <div className={css.wrapper}>
            <p className={css.text}>{name}: {number}</p>
            <button className={css.button}
                type="submit" 
                onClick={() => {dispatch(deleteContact(id))}}>Delete</button>
        </div>
     );
        };

export default ContactListItem;