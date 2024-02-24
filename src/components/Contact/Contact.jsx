const Contact = ({ contact }) => {
  return (
    <li>
      {contact.name}
      {contact.number}
      <button>Delet</button>
    </li>
  )
}

export default Contact
