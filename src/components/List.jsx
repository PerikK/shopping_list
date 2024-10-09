import { useState } from 'react'
import Item from './Item'
import Stats from './Stats'

export default function List({
	items,
	onDeleteItem,
	onToggleInCart,
	onClearList,
}) {
	const [sortBy, setSortBy] = useState('input')

	let sortedItems = []

	if (sortBy === 'input') {
		sortedItems = items
	}

	if (sortBy === 'name') {
		sortedItems = items
			.slice()
			.sort((a, b) => a.itemName.localeCompare(b.itemName))
	}
	if (sortBy === 'inCartStatus') {
		sortedItems = items
			.filter((item) => !item.inCart)
			.concat(items.filter((item) => item.inCart))
	}

	return (
		<>
			<div>
				<ul className='grid grid-cols-2 gap-3 min-h-60 overflow-y-auto w-full mx-12'>
					{sortedItems?.map((item) => (
						<Item
							key={item.id}
							item={item}
							onDeleteItem={onDeleteItem}
							onToggleInCart={onToggleInCart}
						/>
					))}
				</ul>
			</div>
			<Stats items={items} />
			<div className='w-4/12 flex justify-around rounded-2xl bg-opacity-60 p-2.5 mb-8 bg-slate-400 shadow-lg shadow-indigo-500/50'>
				<select
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}
					className='text-2xl bg-slate-900  rounded-xl p-2 hover:bg-slate-700 hover:text-xl'
				>
					<option value='input'>Sort by input order</option>
					<option value='name'>Sort by name</option>
					<option value='inCartStatus'>Sort by in cart status</option>
				</select>
				<button
					onClick={onClearList}
					className='text-2xl bg-slate-900  rounded-xl p-2 hover:bg-slate-700 hover:text-xl'
				>
					Clear list
				</button>
			</div>
		</>
	)
}
