import { useState } from 'react'
import { IState as Props } from '../App'
interface IProps {
  people: Props['people']
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}
const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    url: '',
    notes: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url) {
      return
    }
    setPeople([
      ...people,
      { name: input.name, age: +input.age, url: input.url, notes: input.notes },
    ])
    setInput({ name: '', age: '', url: '', notes: '' })
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
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  )
}

export default AddToList
