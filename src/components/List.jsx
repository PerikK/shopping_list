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
	localStorage.setItem('listItems', JSON.stringify(items))

	//Just a test

	return (
		<>
			<div>
				<ul className='flex flex-col gap-3 mt-6 mb-4 mx-4 md:grid md:grid-cols-3 lg:grid-cols-4 lg:mx-24 md:gap-10'>
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
			<div className='mx-2 w:9/12  md:w-6/12 flex justify-around rounded-2xl bg-opacity-60 p-2.5 my-6 bg-slate-400 shadow-lg shadow-indigo-500/50'>
				<select
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}
					className='text-1xl m-2 bg-slate-900 shadow-md  rounded-xl p-2 hover:bg-slate-700 hover:text-xl'
				>
					<option value='input'>Sort by input order</option>
					<option value='name'>Sort by name</option>
					<option value='inCartStatus'>Sort by in cart status</option>
				</select>
				<button
					onClick={onClearList}
					className='text-1xl m-2 bg-slate-900 shadow-md  rounded-xl p-2 hover:bg-slate-700 hover:text-xl'
				>
					Clear list
				</button>
			</div>
		</>
	)
}
