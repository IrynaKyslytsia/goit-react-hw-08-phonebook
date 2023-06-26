import { AiOutlinePlus } from 'react-icons/ai';
import css from './AddButton.module.css'

const AddButton = ({onClick}) => {
    return (
        <button className={css.button} 
            type="button" 
            onClick={onClick} 
            aria-label="Add contact">
                <AiOutlinePlus width='24' height='24' fill='white' />
        </button>
    )
};

export default AddButton;