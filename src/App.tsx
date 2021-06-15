import { useState } from 'react'
import List from './components/List'
import './index.css'
import './App.css'

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
      url: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f5be112e7f395dc08ef8e58%2F0x0.jpg',
    },
  ])

  return (
    <div className="header">
      <h1>People Invited to my Party</h1>
      <List people={people} />
    </div>
  )
}

export default App
