export default function Item({item}) {
    return (
        <>
            <li>
                <span style={{textDecoration: item.inCart ? "line-through" : "none"}}>
                    {item.qty} {item.itemName}
                </span>
                <button>❌</button>
            </li>
        </>
    )
}