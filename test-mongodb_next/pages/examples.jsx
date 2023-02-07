import clientPromise from "../lib/mongodb";

export default function Microagressions({ Microagressions }) {
    return (
        <div>
            <h1>ITS WORKING!!!</h1>
            
            <ul>
                {Microagressions.map((microagression) => (
                    <li>
                        <h2>{microagression.title}</h2>
                        <h3>{microagression.content}</h3>
                    </li>
                ))}
            </ul>
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