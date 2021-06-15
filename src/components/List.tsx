import './List.css'
interface IProps {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}
const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => (
      <li className="List">
        <div className="List-header">
          <img className="List-image" src={person.url} alt="foysal" />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className="List-note">{person.note} years old</p>
      </li>
    ))
  }
  return <ul>{renderList()}</ul>
}

export default List
