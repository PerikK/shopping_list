import Item from './Item'

export default function List({ items, onDeleteItem, onToggleInCart }) {
	return (
		<div>
			<ul>
				{items?.map((item) => (
					<Item
						key={item.id}
						item={item}
						onDeleteItem={onDeleteItem}
						onToggleInCart={onToggleInCart}
					/>
				))}
			</ul>
		</div>
	)
}
