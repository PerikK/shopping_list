export default function Item({ item, onDeleteItem, onToggleInCart }) {
	return (
		<>
			<li
				className={`m-2px text-l md:text-2xl grid grid-col-[1fr_80xp_40px] gap-3 size-fit w-full bg-slate-700 border-2 p-3 rounded-lg  ${
					item.inCart ? 'bg-gray-800' : ''
				}`}
			>
				<span
					className={`text-lg md:text-2xl p-1 mr-4 break-words max-w-xs ${
						item.inCart
							? 'line-through decoration-red-500 text-slate-500'
							: ''
					}`}
				>
					{item.qty}. {item.itemName}
				</span>
				<button
					className='bg-slate-600 text-xl hover:text-2xl p-2 mx-2 rounded-lg hover:bg-slate-800'
					onClick={() => onToggleInCart(item.id)}
				>
					In 🛒
				</button>
				<button
					className='hover:text-2xl  mx-auto size-fit'
					onClick={() => onDeleteItem(item.id)}
				>
					❌
				</button>
			</li>
		</>
	)
}
