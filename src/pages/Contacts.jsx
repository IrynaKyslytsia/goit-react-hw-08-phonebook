import ContactForm from "components/ContactForm";
import Container from "components/Container";
import Filter from "components/Filter/Filter";
import Modal from "components/Modal/Modal";
import { useState } from "react";


const Contacts = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(state => !state);

    return (
        <Container>
            <button type="button" onClick={toggleModal} aria-label="Add contact">Add contact</button>
            <Filter />
            {isModalOpen && (
                <Modal onClose={toggleModal}>
                    <ContactForm onSave={toggleModal} />
                </Modal>
            )}
        </Container>
    )
};

export default Contacts;