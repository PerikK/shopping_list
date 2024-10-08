export default function Item({ item, onDeleteItem, onToggleInCart }) {
    
	return (
		<>
			<li>
				<input
					type='checkbox'
					value={item.inCart}
					onChange={() => onToggleInCart(item.id)}
				/>
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