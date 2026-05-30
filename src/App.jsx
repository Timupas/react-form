import "./App.css";
import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/ContactForm/FilterC/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState((prevstate) => {
      return {
        contacts: [...prevstate.contacts, newContact],
        name: "",
        number: "",
      };
    });
  };

  render() {
    const normalizeFilter = this.state.filter.toLowerCase();
    const filterContact = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} onChange={this.handleChange} name={this.state.name} number={this.state.number}></ContactForm>
        <Filter onChange={this.handleChange} value={this.state.filter}/>
        {/* <label>
          {" "}
          Find contac by Name
          <br />
          <input type="text" name="filter" onChange={this.handleChange} />
        </label> */}
        <ul>
          {filterContact.map((contact) => {
            return (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
