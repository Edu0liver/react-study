import { useState } from 'react';
import './App.css'
// import ListGroup from './components/ListGroup'
import Alert from './components/Alert'
import Button from './components/Button'

export default function App() {

  // const heading = 'Cities';
  
  // const items = [
  //   'New York',
  //   'Los Angeles',
  //   'Chicago',
  //   'Houston',
  //   'Phoenix',
  //   'Philadelphia',
  // ];

  // const handleSelectedItem = (item: string) => console.log(item);

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      {/* <div><ListGroup items={items} heading={heading} onSelectedItem={handleSelectedItem}/></div> */}

      <div>
        { alertVisible && <Alert onClose={() => setAlertVisible(false)}> This is an alert! </Alert> }
      </div>

      <div>
        <Button color='secondary' onClick={() => setAlertVisible(true)}>My Button</Button>
      </div>
    </>
  )
}
