import { useState } from 'react'
const AddToList = () => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    url: '',
    notes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        value={input.name}
        className="AddToList-input"
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        value={input.age}
        className="AddToList-input"
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image Url"
        value={input.url}
        className="AddToList-input"
        name="url"
        onChange={handleChange}
      />
      <textarea
        placeholder="Notes"
        value={input.notes}
        className="AddToList-input"
        name="notes"
      />
    </div>
  )
}

export default AddToList
