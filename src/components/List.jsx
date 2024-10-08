import { useState } from 'react'
import Item from './Item'
import Sorting from './Sorting'

export default function List({
	items,
	onDeleteItem,
	onToggleInCart,
}) {
	const [sortBy, setSortBy] = useState('input')

	let sortedItems = []

	if (sortBy === 'input') {
		sortedItems = items
	}

	if (sortBy === 'name') {
		sortedItems = items.slice().sort((a, b) =>
			a.itemName.localeCompare(b.itemName)
		)
    }
    if (sortBy === 'inCartStatus') {
		sortedItems = items
			.filter((item) => !item.inCart)
			.concat(items.filter((item) => item.inCart))
	}

	return (
		<div>
			<ol>
				{sortedItems?.map((item) => (
					<Item
						key={item.id}
						item={item}
						onDeleteItem={onDeleteItem}
						onToggleInCart={onToggleInCart}
					/>
				))}
			</ol>
			<select
				value={sortBy}
				onChange={(e) => setSortBy(e.target.value)}
			>
				<option value='input'>Sort by input order</option>
				<option value='name'>Sort by name</option>
				<option value='inCartStatus'>Sort by in cart status</option>
            </select>
            <button>Clear list</button>
		</div>
	)
}
