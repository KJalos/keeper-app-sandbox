import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import contacts from "../contacts";

function App() {
  const cardList = contacts.map((contact) => (
    <Card
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  ));
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL="https://picsum.photos/200" />
      {cardList}
    </div>
  );
}

export default App;
