import note from '../assets/note.png'
export default function Logo() {
	return (
		<>
			<div className='grid grid-cols-[2fr_3fr] place-items-center rounded-xl mx-2  bg-slate-600 shadow-lg shadow-indigo-500/50'>
				<img src={note} alt='a notepad icon' className='md:align-items-start' />
				<h1 className='text-l place-items-start md:text-2xl md:place-items-center'>
					My Shopping List <span className='p-2'>🛒</span>
				</h1>
			</div>
		</>
	)
}
