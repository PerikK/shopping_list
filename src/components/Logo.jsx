import note from '../assets/note.png'
export default function Logo() {
	return (
		<>
			<div className='display grid grid-cols-[2fr_3fr] place-items-center w-4/5 rounded-xl py-3 bg-slate-600 shadow-lg shadow-indigo-500/50'>
				<img
					src={note}
					alt='a notepad icon'
					className='justify-self-end px-4'
				/>
				<h1 className='text-3xl justify-self-start px-12'>
					My Shopping List <span className='ml-12'>🛒</span>{' '}
				</h1>
			</div>
		</>
	)
}
