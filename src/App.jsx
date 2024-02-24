import { useState } from "react"
import "./App.css"
import ContactForm from "./components/ContactForm/ContactForm"
import ContactList from "./components/ContactList/ContactList"
import SearchBox from "./components/SearchBox/SearchBox"

const toStandartRegister = (value) => value.toLocaleLowerCase()

function App() {
  const contacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]

  const [inputSearch, setInputSearch] = useState("")

  const onSearch = (evt) => {
    setInputSearch(evt.target.value)
  }

  const filtredContacts = () => {
    const filtred = contacts.filter((el) =>
      toStandartRegister(el.name).includes(toStandartRegister(inputSearch))
    )
    return filtred
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox inputSearch={inputSearch} onSearch={onSearch} />
      <ContactList contacts={filtredContacts} />
    </div>
  )
}

export default App
