import { useState } from 'react'

export default function Form({ onAddItems }) {
	const [itemName, setItemName] = useState('')
	const [qty, setQty] = useState(1)

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!itemName) return

		const newItem = { id: Date.now(), itemName, qty, inCart: false }

		onAddItems(newItem)

		setItemName('')
		setQty(1)
	}

	return (
		<>
			<form  onSubmit={handleSubmit}>
				<h3 className='text-2xl p-2'>
					What do you need to buy?
				</h3>
				<select
					className='m-3 px-3 py-2  bg-opacity-100 bg-slate-900  rounded-xl p-2 hover:bg-slate-700'
					value={qty}
					onChange={(e) => setQty(Number(e.target.value))}
				>
					{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
						<option value={num} key={num}>
							{num}
						</option>
					))}
				</select>
				<input
					className='ml-3 px-3 py-2  bg-opacity-100 bg-slate-950  rounded-xl p-2 hover:bg-slate-700'
					type='text'
					placeholder='Item...'
					value={itemName}
					onChange={(e) => setItemName(e.target.value)}
				/>
				<button className='mx-2 px-3 py-1  bg-opacity-100 bg-slate-700  rounded-xl p-2 hover:bg-slate-500'>
					Add
				</button>
			</form>
		</>
	)
}
