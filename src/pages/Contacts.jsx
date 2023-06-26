import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { selectContacts } from "redux/contacts/selectors";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import Modal from "components/Modal/Modal";
import AddButton from "components/AddButton/AddButton";

const Contacts = () => {

    const contacts = useSelector(selectContacts);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(state => !state);

    return (
        <>
            <Helmet>
                <title>Your contacts</title>
            </Helmet>
            <AddButton onClick={toggleModal} />
            <Filter />
            {contacts.items.length > 0 ? <ContactList /> : <div>There are no contacts...</div>}
            {isModalOpen && (
                <Modal onClose={toggleModal}>
                    <ContactForm onSave={toggleModal} />
                </Modal>
            )}
        </>
    )
};

export default Contacts;