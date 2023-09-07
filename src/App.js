import React, { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import './App.css';
import NewContact from './components/Products/NewContact';
import ContactList from './components/Products/ContactList';

function App() {
  const [loadedContacts, setLoadedContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addProductHandler = async () => {
    try {
      setIsLoading(true);
      let hasError = false;
      const response = await fetch('https://randomuser.me/api');

      if (!response.ok) {
        hasError = true;
      }

      const responseData = await response.json();
      
      // console.log("Response Data =>",responseData)
      // console.log("Response Data Email =>",responseData.results[0].email)
      // console.log("Response Data NameArray =>",responseData.results[0].name)
      // console.log("Response Data Name =>",responseData.results[0].name.title+" "+responseData.results[0].name.first+" "+responseData.results[0].name.last)

      const newContact = {
          title: responseData.results[0].name.title+" "+responseData.results[0].name.first+" "+responseData.results[0].name.last,
          email: responseData.results[0].email 
        };

      if (hasError) {
        throw new Error(responseData.message);
      }
      setLoadedContacts(prevContacts => {
        return prevContacts.concat({
          ...newContact
        });
      });
      setIsLoading(false);
    } catch (error) {
      alert(error.message || 'Something went wrong!');
    }
  };

  return (
    <React.Fragment>
      <Header />
      <main>
        <NewContact onAddProduct={addProductHandler} />
        {isLoading && <p className="loader">Loading...</p>}
        {!isLoading && <ContactList contactInfo={loadedContacts} />}
      </main>
    </React.Fragment>
  );
}

export default App;
