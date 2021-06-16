import { useState } from 'react'
import List from './components/List'
import './index.css'

interface IState {
  people: {
    name: string
    age: number
    url: string
    notes?: string
  }[]
}
function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Foysal',
      age: 29,
      url: 'https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg',
    },
  ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
    </div>
  )
}

export default App
