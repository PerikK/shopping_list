import { useState } from 'react'

export default function Form() {
    const [itemName, setItemName] = useState('')
    const [qty, setQty] = useState(1)

    function handleSubmit(e) {
        e.preventDefault()
        
        if(!itemName) return
        const newItem = { id: Date.now(), itemName: itemName, qty, inCart: false }

        setItemName('')
        setQty(1)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>What do you need to buy?</h3>
                <select
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                >
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                        <option value={num} key={num}>
                            {num}
                        </option>
                    ))}
                </select>
                <input
                    className='mx-3 px-3'
                    type='text'
                    placeholder='Item...'
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
                <button>Add</button>
            </form>
        </>
    )
}
