import { nanoid } from "nanoid"
const id = nanoid()
const SearchBox = ({ inputSearch, onSearch }) => {
  return (
    <div>
      <label htmlFor={id}>Find contacts by name</label>
      <input id={id} type='text' value={inputSearch} onChange={onSearch} />
    </div>
  )
}

export default SearchBox
