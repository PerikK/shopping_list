import note from '../../assets/note.png'
export default function Logo() {
	return (
		<>
			<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
					<img src={note} alt='a notepad icon' />
					<h1>My Shopping List 🛒</h1>
			</div>
		</>
	)
}
