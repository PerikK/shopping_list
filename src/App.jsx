// import './App.css'
import Logo from './components/Logo.jsx'
import Form from './components/Form.jsx'
import List from './components/List.jsx'
import { useState } from 'react'

export default function App() {
	const fromLocalStorage = JSON.parse(localStorage.getItem('listItems'))
	const [items, setItems] = useState(fromLocalStorage || [])
	

	const handleAddItems = (item) => {
		setItems((items) => [...items, item])
	}

	const handleDeleteItem = (id) => {
		const confirmed = window.confirm(
			'Are you sure you want to delete this item?'
		)

		if (confirmed)
			setItems((items) => items.filter((item) => item.id !== id))
	}

	const handleToggleInCart = (id) => {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, inCart: !item.inCart } : item
			)
		)
	}

	function handleClearList() {
		const confirmed = window.confirm(
			'Are you sure you want to delete all items?'
		)

		if (confirmed) setItems([])
	}

	return (
		<>
			<div className='min-w-full  md:grid grid-rows-[1fr_1fr_5fr_2fr] md:min-w-full min-h-screen bg-[#1e1f2b] place-items-center md:my-0 py-3 '>
				<Logo />
				<Form onAddItems={handleAddItems} />
				<List
					items={items}
					onDeleteItem={handleDeleteItem}
					onToggleInCart={handleToggleInCart}
					onClearList={handleClearList}
				/>
			</div>
		</>
	)
}
