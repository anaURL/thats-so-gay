import clientPromise from "../../lib/mongodb";
// import Footer from './footer/footer';
import Microagressions from '../../models/microagressions'


export const Examples = ({microagressionsList}) => {
    return (
      <> 
      <div className=" bg-purple">
        {/* <Header /> */}
        <h1 className ="text-lime"> What are microaggressions?</h1>
        <p className= "text-white"> Assuming someone's gender pronouns, not asking about their pronouns, and continuing to use the wrong pronouns after the correct ones have been shared is one very common example of microaggression that deny the personal experience, emotions, or thoughts of a person. Start browsing to learn more about microaggressions and their impact.</p>

       <ul> {microagressionsList.map((microagression) => (
        <li> 
          <h2> {microagression.title} </h2>
          <p> {microagression.content} </p>
        </li>
       ) )}
         </ul>
        {/* <Footer />  */}
      </div>
      </>
  )
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise; 
    const db = client.db("microagressions");

    const microaggressions = await db 
    .collection("Microagressions")
    .find({})
    .limit (1000)
    .toArray();

    return {
      props: {microagressionsList: JSON.parse(JSON.stringify(microagressions))}
    };
  } catch (e) {
    console.error(e)
  }
}
