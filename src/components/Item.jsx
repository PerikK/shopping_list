export default function Item({ item, onDeleteItem, onToggleInCart }) {
	return (
		<>
			<li className=''>
				<input
					type='checkbox'
					value={item.inCart}
					onChange={() => onToggleInCart(item.id)}
					className='mr-2 size-5'
				/>
				<span
					style={{
						textDecoration: item.inCart ? 'line-through' : 'none',
					}}
					className='text-2xl mr-4'
				>
					{item.qty}. {item.itemName}
				</span>
				<button
					className='hover:text-xl'
					onClick={() => onDeleteItem(item.id)}
				>
					❌
				</button>
			</li>
		</>
	)
}
