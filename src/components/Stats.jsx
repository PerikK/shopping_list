export default function Stats({ items }) {
	const numItems = items.length
	const itemsInCart = items.filter((item) => item.inCart).length

	if (!items.length) {
		return (
			<p>
				<em>Add some items to your shopping list</em>
			</p>
		)
	}

	if (numItems == itemsInCart) {
		return (
			<p>
				<em>Everything is in your cart. You are ready to go!!</em>
			</p>
		)
	}

	return (
		<>
			<footer className='stats'>
				<em>
                    You have {numItems} items on your list
                    and you have already {itemsInCart} items in your cart
				</em>
			</footer>
		</>
	)
}
