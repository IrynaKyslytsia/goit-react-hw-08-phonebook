import { RiUserAddLine } from 'react-icons/ri';
import css from './AddButton.module.css'

const AddButton = ({onClick}) => {
    return (
        <button className={css.button} 
            type="button" 
            onClick={onClick} 
            aria-label="Add contact">
                <RiUserAddLine fill='white' />
        </button>
    )
};

export default AddButton;