import clientPromise from "../lib/mongodb";
import NavBar from "../components/NavBar";
import MicroagressionsCreate from "../components/MicroagressionsCreate";
import Link from 'next/link'

export default function Microagressions({ Microagressions }) {
    return (
        <div>
            <NavBar />
          
            <div className="mx-auto lg:grid lg:grid-flow-row lg:gap-8 lg:my-2 py-8 max-w-7xl sm:grid-cols-2 px-8 sm:px-6 lg:px-8">
            <ul>
                {Microagressions.map((microagression) => (
                    <li key={microagression.title}>
                        <h2 className= "text-center text-black font-black text-4xl md:my-6 tracking-tight md:tracking-normal">{microagression.title}</h2>
                        <p className="font-normal text-lg mt-4 text-justify text-black tracking-tight md:tracking-normal">{microagression.content}</p>
                    </li>
              
            //   <li>
            //   <p className="text-center font-normal lg:mt-6 p-4">
            //   <Link href="/resources">
            //     <a className="text-lime bg-purple text-xl md:text-2xl mb-0">How to address microagressions?</a>
            //     </Link>
            //   </p>

            //   <p>
            //   <Link href="/edit">
            //       <a className="text-white bg-purple text-xl md:text-2xl mb-0">Want to contribute? Suggest revision of the microagression</a>
            //     </Link>
            //     </p>
            // </li>
                    ))}
            </ul>
            </div>
        </div>
    );
}


 export async function getServerSideProps() {
     try {
         const client = await clientPromise;
         const db = client.db("Microagressions");

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
     }
 }