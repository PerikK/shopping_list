// import './App.css'
import Logo from './components/Logo.jsx'
import Form from './components/Form.jsx'
import List from './components/List.jsx'
import Stats from './components/Stats.jsx'
import { useState } from 'react'

export default function App() {
  const [items, setItems] = useState([])

const handleAddItems = (item) => {
	setItems((items) => [...items, item])
}
  
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id))
  }

	return (
		<>
			<div className='display grid grid-rows-[1fr_1fr_5fr_2fr] min-w-screen min-h-screen  place-items-center my-0 py-0'>
				<Logo />
				<Form onAddItems={handleAddItems} />
				<List items={items} onDeleteItem={handleDeleteItem} />
				<Stats />
			</div>
		</>
	)
}
