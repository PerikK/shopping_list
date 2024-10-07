import note from '../assets/note.png'
export default function Logo() {
	return (
		<>
			<div className='display grid grid-cols-[2fr_3fr] place-items-center min-w-full bg-slate-600'>
					<img src={note} alt='a notepad icon' className='justify-self-end px-4'/>
					<h1 className='text-3xl justify-self-start px-12'>My Shopping List <span className='ml-12'>🛒</span> </h1>
			</div>
		</>
	)
}
