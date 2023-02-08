import {useState} from 'react';
import { c } from 'tar';
import MicroagressionsCreate from './components/MicroagressionsCreate';
import MicroagressionsList from '../components/MicroagressionsList';


const App = () =>  {
    const [microagressions, setMicroagressions] = useState([])

    const editMicroagressionById = (id,newTitle,newContent)  => {
        const updatedMicroagressions = microagressions.map((microagression) => {
            if (microagression.id === id) {
                return {...microagression, title:newTitle, content:newContent}   
            }
            return microagression;
        })
        setMicroagressions(updatedMicroagressions)
    }

    const deleteMicroagressionById = (id) => {
        const updatedMicroagressions = microagressions.filter((microagression) => {
            return microagression.id !== id;
        })
       setMicroagressions(updatedMicroagressions)
    }
    
    const createMicroagression = (title,content) => {
        console.log('Please add title of the microagression')
        const updatedMicroagressions = [ ...microagressions, { id, title, content}]
        setMicroagressions(updatedMicroagressions)

    };

  return (
    <div>
      <MicroagressionsList microagressions={microagressions} onEdit={editMicroagressionById} onDelete={deleteMicroagressionById}/>
      <MicroagressionsCreate onCreate={createMicroagression} /> 
    </div>
  )
}

export default App
