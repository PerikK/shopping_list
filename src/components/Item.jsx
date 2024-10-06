export default function Item({item}) {
    return (
        <>
            <li>
                <span>
                    {item.qty} {item.name}
                </span>
                <button>❌</button>
            </li>
        </>
    )
}