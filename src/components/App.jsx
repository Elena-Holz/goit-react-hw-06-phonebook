import { useEffect } from "react";
// import { nanoid } from "nanoid";
import ContactsItem from 'components/ContactsItem/ContactsItem.jsx';
import FormAddPhone from 'components/FormAddPhone/FormAddPhone.jsx';
import Filter from "components/Filter/Filter.jsx";
import css from 'components/App.module.css'
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import { addContact, removeContact } from 'redux/contacts/contactsSlice.js';
import { setFilter } from "redux/filter/filterSlice";
import { getFilter } from "redux/filter/filterSelector";
import { getFilteredContacts } from "redux/contacts/contactsSelector";


export function App() {
  
  // const [contacts, setContacts] = useState(() => {
  //   const value = JSON.parse(localStorage.getItem("contacts"));
  //   return value ?? [];
  // });
 
  // const [filter, setFilter] = useState('')

  const contacts = useSelector(getFilteredContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts])


const onAddContact = (contact) => {
     if (isCopy(contact)) {
        return alert(`${contact.name} is already in contacts`);
    }
    
  const action = addContact(contact);
        dispatch(action);
  
  // setContacts((prev) => {
  //     const newContact = {
  //     id: nanoid(),
  //     ...contact
  //   }
  //     return [...prev, newContact]
  //     })
    
  }

  
  const onRemoveContact = (id) => {
       const action = removeContact(id);
        dispatch(action);

    // setContacts((prev) => {
    //   const newContacts = prev.filter((contact) => contact.id !== id);
    //   return newContacts;
    //   })
}
      
    
     const handelChange = (event) => {
       const { value } = event.target;
       dispatch(setFilter(value));

      //  setFilter(value);
  }

   const isCopy = ({ name }) => {
    const result = contacts.find((item) => item.name === name);
    return result;
  }

//   const   getFilterContacts = () => {
//     if (!filter) {
//       return contacts;
//     }
//     const registerFilter = filter.toLocaleLowerCase();
//     const filterContacts = contacts.filter(({ name }) => {
//       const registerName = name.toLocaleLowerCase();
//       const result = registerName.includes(registerFilter);
//       return result;
//     })

//     return filterContacts;
// }

  // const { addContact, handelChange,  removeContact } = this;
  
  // const filterContacts = getFilterContacts();
  
 return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        
        <h2 className={css.title}>Phonebook</h2>
        <FormAddPhone onSubmit={onAddContact} />
        <Filter filter={filter} handelChange={handelChange} />
        <h2 className={css.title}>Contacts</h2>
        <ContactsItem items={contacts} removeContact={onRemoveContact}/>
      </div>
    );
      }
 



App.propTypes = {

    contacts: PropTypes.array,
    filter: PropTypes.string,
    
}