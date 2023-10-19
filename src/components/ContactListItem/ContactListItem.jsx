import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import css from './ContactListItem.module.css'
import { BsFilePerson } from "react-icons/bs";
import { MdDeleteOutline, MdEdit } from "react-icons/md"
import { toast } from "react-hot-toast";

const ContactListItem = ({ name, number, id }) => {
    const dispatch = useDispatch();

    return (
        <div className={css.wrapper}>
            {<BsFilePerson />}
            <p className={css.text}>{name}: {number}</p>
            <div className={css.buttonWrapper}>
                <button className={css.button}>
                    <MdEdit />
                </button>
                <button className={css.button}
                    type="submit" 
                    onClick={() => {dispatch(deleteContact(id))
                        toast(`🗑️ Contact ${name} delited`);
                    }}>
                    <MdDeleteOutline />
                </button>
            </div>
        </div>
     );
        };

export default ContactListItem;