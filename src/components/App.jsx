
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { H1, H2 } from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading, getError } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

 useEffect(() => {dispatch(fetchContacts())}, [dispatch]);

  return (
        <div>
            <H1>Phonebook</H1>
            <ContactForm />

            <H2>Contacts</H2>
            <Filter />
            <ContactList />
            {isLoading && !error}
        </div>)
  }