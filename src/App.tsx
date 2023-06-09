import './App.css'
import ListGroup from './components/ListGroup'

function App() {
  
  const items = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
  ];

  return (
    <div><ListGroup items={items} heading='Cities'/></div>
  )
}

export default App
