import {useState} from 'react';
import { c } from 'tar';
import MicroagressionsCreate from './components/MicroagressionsCreate';


const App = () =>  {
    const [microagressions, setMicroagressions] = useState([])
    
    const createMicroagression = (title) => {
        console.log('Please add title of the microagression')
    }

  return (
    <div>
      <MicroagressionsCreate onCreate={createMicroagression} /> 
    </div>
  )
}

export default App
