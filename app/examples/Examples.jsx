import clientPromise from "../../lib/mongodb";
// import Footer from './footer/footer';
import Microagression from '../models/microaggressions'


export const Examples = ({microaggressions}) => {
    return (
      <div className=" bg-purple">
        {/* <Header /> */}
        <h1 className ="text-lime"> What are microagressions?</h1>
        <p className= "text-white"> Assuming someone's gender pronouns, not asking about their pronouns, and continuing to use the wrong pronouns after the correct ones have been shared is one very common example of microaggression that deny the personal experience, emotions, or thoughts of a person. Start browsing to learn more about microagressions and their impact.</p>

       <ul> {microaggressions.map((microagression) => (
        <li> 
          <h2> {microagression.title} </h2>
          <p> {microagression.content} </p>
        </li>
       ) )}
         </ul>
        {/* <Footer />  */}
      </div>
  )
}

export async function getStaticProps () {
  try {
    const client = await clientPromise; 
    const db = client.db("microagressions");

    const Microaggression = await db 
    .collection("microagressions")
    .find({})
    .limit (1000)
    .toArray();

    return {
      props: {microaggressionsList: JSON.parse(JSON.stringify(microaggressions))}
    };
  } catch (e) {
    console.error(e)
  }
}
