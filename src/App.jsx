// import './App.css'
import Logo from './components/Logo.jsx'
import Form from './components/Form.jsx'
import List from './components/List.jsx'
import Stats from './components/Stats.jsx'

export default function App() {

  return (
    <>
      <div className='display grid grid-rows-[1fr_1fr_5fr_2fr] min-w-screen min-h-screen  place-items-center my-0 py-0'>
        <Logo />
        <Form />
        <List />
        <Stats /> 
      </div>
    </>
  )
}


 