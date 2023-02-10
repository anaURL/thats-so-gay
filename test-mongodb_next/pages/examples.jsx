import { useState, useEffect } from 'react'
import { clientPromise} from "../lib/mongodb";
import NavBar from "../components/NavBar";
import MicroagressionsCreate from "../components/MicroagressionsCreate";
import Link from 'next/link'

export default function examples({ Microagressions }) {
    // console.log("Microagressions:", Microagressions);


const [microagressions, setMicroagressions] = useState([Microagressions]);
// console.log("microagressions:", microagressions);


// useEffect(()=> {
//   (async () => {
//     const results = await fetch ("/api/list").then(response => response.json());
//     setMicroagressions(results);
//   }) ();
// }, []);


    function addMicroagression(){
        const newMicroagression = {
            title: "title",
            content: "content",
           
          }
        // console.log({newMicroagression})
        setMicroagressions([...microagressions, newMicroagression])
    }

    return (
        <div>
            <NavBar />
            <div className="mx-auto lg:grid lg:grid-flow-row lg:gap-8 lg:my-2 py-8 max-w-7xl sm:grid-cols-2 px-8 sm:px-6 lg:px-8">
                <ul>
                    
                    {microagressions.map((microagression) => (                        
                        <li key={microagression.id}>
                            <h2 className= "text-center text-black font-black text-4xl md:my-6 tracking-tight md:tracking-normal">
                                {microagression.title}
                            </h2>
                            <p className="font-normal text-lg mt-4 text-justify text-black tracking-tight md:tracking-normal">
                                {microagression.content}
                            </p>
                            <Link href="/resources">
                                <button className='text-lime bg-purple text-l mb-0'> How to address microagressions?</button>
                             </Link>

                            <Link href="/edit">
                            <button className="text-white bg-purple text-l  mb-0">Want to contribute? Suggest revision of the microagression</button>
                            </Link>
                        </li>
                          ))}
                          </ul>
                       
                           

 {/* ADD FORM  */}
                {/* <MicroagressionsCreate  microagressions={microagressions} handleSetMicroagressions={setMicroagressions}/> */}
                <button  className={'border-2 p-4 my-4'} onClick={()=> addMicroagression()}>add!</button>        

            </div>
        </div>
    );
}


export async function getServerSideProps() {
    try {
        const { mongoClient, database } = await connectToDatabase();
        const db = mongoClient.db("Microagressions");

        const microagressions = await db
            .collection("microagressions")
            .find({})
            .limit(20)
            .toArray();

        return {
            props: { Microagressions: JSON.parse(JSON.stringify(microagressions)) },
        };
    } catch (e) {
        console.error(e);
        return {
            props: {Microagressions: []}
        }
    }
}