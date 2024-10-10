export default function Stats({ items }) {

	const numItems = items.length
    const itemsInCart = items?.filter((item) => item.inCart).length
    

	if (!items.length) {
		return (
			<p className='bg-slate-600 text-2xl p-3 rounded-2xl mx-2 shadow-lg shadow-indigo-500/50'>
				<em>🛒 Add some items to your shopping list</em>
			</p>
		)
	}

	if (numItems == itemsInCart) {
		return (
			<p>
				<em className='bg-slate-600 text-2xl p-3 rounded-2xl shadow-lg shadow-indigo-500/50'>
					Everything is in your cart. You are ready to go!! 🛒🛒
				</em>
			</p>
		)
	}

	return (
		<>
			<div className='bg-slate-600 text-2xl p-3 mx-2 rounded-2xl shadow-lg shadow-indigo-500/50'>
				<em>
					You have{' '}
					<span className='font-bold text-yellow-300 '>
						{numItems}
					</span>{' '}
					items on your list and you have already{' '}
					<span className='font-bold text-yellow-300 mx-1'>
						{itemsInCart}
					</span>{' '}
					items in your cart 🛒
				</em>
			</div>
		</>
	)
}
