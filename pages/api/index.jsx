import Head from 'next/head'
import { Footer } from '../src/components/footer/footer'
import { Header } from  '../src/components/header/header'
import { HomePage } from '../src/components/home/home-page'

export default function Home({data}) {
    return (
      <div> 
        <Head>
          <title>That's so gay</title>
        </Head>
        <HomePage data={data}/>  
        </div>
    );
  }
  
  
//   export async function getServerSideProps() {
//     const { events_categories } = await import('/data/data.json');
//     console.log(events_categories)
//     return {
//       props: {
//         data: events_categories,
//       },
//     };
//   }