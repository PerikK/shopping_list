import Item from './Item'

export default function List({ items, onDeleteItem }) {
	return (
		<div>
			<ul>
				{items?.map((item) => (
					<Item
						key={item.id}
						item={item}
						onDeleteItem={onDeleteItem}
					/>
				))}
			</ul>
		</div>
	)
}
