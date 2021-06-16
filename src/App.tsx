import { useState } from 'react'
import AddToList from './components/AddToList'
import List from './components/List'
import './index.css'

export interface IState {
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
      notes: 'Allergic to staying on the same team',
    },
  ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  )
}

export default App
