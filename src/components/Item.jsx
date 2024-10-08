export default function Item({ item, onDeleteItem }) {
	return (
		<>
			<li>
				<span
					style={{
						textDecoration: item.inCart ? 'line-through' : 'none',
					}}
				>
					{item.qty} {item.itemName}
				</span>
				<button onClick={() => onDeleteItem(item.id)}>❌</button>
			</li>
		</>
	)
}