export default function Item({ item, onDeleteItem, onToggleInCart }) {

	return (
		<>
			<li className={`size-fit bg-slate-700 border-2 p-3 rounded-lg justify-middle ${item.inCart ? 'bg-gray-800' : ''}`}>
				<span
					className={`text-lg md:text-2xl mr-4 ${
						item.inCart
							? 'line-through decoration-red-500 text-slate-500'
							: ''
					}`}
				>
					{item.qty}. {item.itemName}
				</span>
				<button
					className='bg-slate-600 hover:text-xl p-2 rounded-lg'
					onClick={() => onToggleInCart(item.id)}
				>
					In 🛒
				</button>
				<button
					className='hover:text-xl mx-2'
					onClick={() => onDeleteItem(item.id)}
				>
					❌
				</button>
			</li>
		</>
	)
}
