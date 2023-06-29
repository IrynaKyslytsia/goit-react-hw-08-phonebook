import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import css from './ContactListItem.module.css'
import { BsPersonFill } from "react-icons/bs";
import { toast } from "react-hot-toast";

const ContactListItem = ({ name, number, id }) => {
    const dispatch = useDispatch();

    return (
        <div className={css.wrapper}>
            {<BsPersonFill />}
            <p className={css.text}>{name}: {number}</p>
            <button className={css.button}
                type="submit" 
                onClick={() => {dispatch(deleteContact(id))
                    toast(`🗑️ Contact ${name} delited`);
                      }}>Delete</button>
        </div>
     );
        };

export default ContactListItem;