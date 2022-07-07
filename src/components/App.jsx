import React from "react";
import Card from "./Card";
import contacts from "../contacts";

// Map is a JS function which is very useful to handle JS arrays. Eg: the 'contacts' array here

// This function gets passed over a single contact at a time instead of the whole array

// For every single component being rendered using a loop, eg the map function,
// we have to give those comps a property that has to be called a 'key' that is unique for each comp
// This is required to efficiently render components inside the virtual DOM.
// The ''key' prop is NOT meant to be used by the user and is there to ensure proper rendering, etc.
// Instead we have to create our own custom props to use th same value
function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/* We are passing a function 'createCard' to another function 'map' */}
      {/* the 'map' function loops over the contacts array and for each contact. it
      calls the 'createCard' functions and it passes over each of the objects
      inside the array to the 'createCard' function */}
      {contacts.map(createCard)}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      /> */}
      {/* <Card
      //   name={contacts[1].name}
      //   img={contacts[1].imgURL}
      //   tel={contacts[1].phone}
      //   email={contacts[1].email}
      // /> */}
      {/* // <Card
      //   name={contacts[2].name}
      //   img={contacts[2].imgURL}
      //   tel={contacts[2].phone}
      //   email={contacts[2].email}
      // /> */}
    </div>
  );
}

export default App;
