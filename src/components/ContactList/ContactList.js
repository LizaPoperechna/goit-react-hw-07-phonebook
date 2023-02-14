import { ContactItem } from 'components/ContactItem/ContactItem';
import { List, P } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';



const getfilteredContacts = (contacts, filter) => {
    if (!filter) {return contacts;}
    else {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()))
    }
}


export const ContactList = () => {

    const dispatch = useDispatch();


    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const filteredContacts = getfilteredContacts(contacts, filter);


    

    return (
        <>
            {filteredContacts.length <= 0 
            ? (<P>No contacts in Phonebook</P>) 
            : (<List>
                    {filteredContacts.map(({ id, name, number }) => {
                        return (
                        <ContactItem
                            key={id}
                            id={id}
                            name={name}
                            number={number}
                            onClick={() => dispatch(deleteContact(id))}
                        />
                        );
                    })}
                </List>)}
        </>
    )
}

