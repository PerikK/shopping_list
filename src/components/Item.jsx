export default function Item({ item, onDeleteItem, onToggleInCart }) {

	return (
		<>
			{/* <li className={`size-fit bg-slate-700 border-2 p-3 rounded-lg hover:bg-slate-600 ${item.inCart ? 'bg-gray-800' : ''}`}>
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
			</li> */}
			<li
				className={`${
					item.id % 2 === 0 ? 'text-left' : 'text-right'
				} p-2`}
				// className={`size-fit ${index % 2 === 0 ? 'text-left' : 'text-right'
				// } bg-slate-700 border-2 p-3 rounded-lg hover:bg-slate-600 ${
				// 	item.inCart ? 'bg-gray-800' : ''
				// }`}
			>
				<span
					className={`text-lg md:text-2xl  mr-4 break-words max-w-xs ${
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
