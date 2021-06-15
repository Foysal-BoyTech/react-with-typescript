import { useState } from 'react'
function App() {
  const [people, setPeople] = useState<{ id: number; value: number }[]>([])

  const addpeople = () => {
    setPeople([
      ...people,
      { id: people.length, value: Math.floor(Math.random() * 10) },
    ])
  }

  return (
    <div>
      <h1>People Invited to my Party</h1>
      <button onClick={addpeople}>AddPeople</button>
      <ul>
        {people.map((el) => (
          <li key={el.id}>{el.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
