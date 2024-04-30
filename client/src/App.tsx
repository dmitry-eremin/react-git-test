import './App.css'
import Button from './components/Button/Button'
import Input from './components/Input/Input'

function App() {
   return (
      <div className='app'>
         <form onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Enter your email" />
            <Button type="submit">Submit</Button>
         </form>
      </div>
   )
}

export default App
