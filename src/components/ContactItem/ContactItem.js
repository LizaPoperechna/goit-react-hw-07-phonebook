import { ButtonDel } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({id, name, number }) => {

    const dispatch = useDispatch();

    return (
        <li>
            {name} : {number}
            <ButtonDel 
                type="button"
                onClick={() => {dispatch(deleteContact(id))}}>
                    Delete Contact
            </ButtonDel>
        </li>
    )
}
