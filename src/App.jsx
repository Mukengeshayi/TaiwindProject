import { 
  Hero,
  Footer,
  PopularProducts,
  SpecialOffert,
  Subscribe,
  SuperQuality,
  CustomerReviews,
  Service,
} from "./sections"
import Nav from "./components/Nav"

export default function App() {
  return (
    <main className=" relative">
      <Nav/>
      <section className="">
       Hero
       </section>
       <section className=" padding">
       Produits Populaire
       </section>
       <section className=" padding">
       Qualité Superieur
       </section>
       <section className=" padding py-10">
       Services
       </section>
       <section className="  bg-pale-blue padding	">
       Acheter
       </section>
       <section className=" padding sm:py-32 py-16 w-full">
       contacter
       </section>
       <section className=" padding bg-black pb-8">
       Footer
       </section>
    </main>
  )
}
