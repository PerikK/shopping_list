import Item from './Item'

const initialItems = [
  { id: 1, name: "Milk", qty: 2, packed: false },
  { id: 2, name: "Sugar", qty: 1, packed: false },
];
export default function List() {
    return (
        <div>
            <ul>
                {initialItems.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </ul>
        </div>
    )
}