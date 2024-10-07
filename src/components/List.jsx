import Item from './Item'

const initialItems = [
  { id: 1, name: "Milk", qty: 2, inCart: false },
  { id: 2, name: "Sugar", qty: 1, inCart: true },
  { id: 3, name: "Eggs", qty: 12, inCart: false },
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