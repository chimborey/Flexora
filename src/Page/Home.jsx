import Home_About from "../Components/Homes/Home_About";
import Home_Bannner from "../Components/Homes/Home_Bannner";
import Home_Contact from "../Components/Homes/Home_Contact";
import Home_Feature from "../Components/Homes/Home_Feature";
import Home_Hero from "../Components/Homes/Home_Hero";
import Home_Payment from "../Components/Homes/Home_Payment";
import Home_Service from "../Components/Homes/Home_Service";
import Home_Portfolio from "../Components/Homes/Home_Portfolio";
import Home_Newsletter from "../Components/Homes/Home_Newsletter";




export default function Home() {
      return (
            <>
                  {/* Home_Hero Section */}
                  <section className=" w-full overflow-hidden py-14 ">
                        <main className=" mt-12 container">
                              <Home_Hero />
                        </main>
                  </section>
                  {/* Home_Banner Section */}
                  <section className=" w-full overflow-hidden py-14">
                        <main className=" mt-12 container">
                              <Home_Bannner />
                        </main>
                  </section>
                  {/* Home_About Section  */}
                  <Home_About />
                  {/* Home_Feature Section */}
                  <section className=" w-full overflow-hidden py-14">
                        <main className=" mt-12 container">
                              <Home_Feature />
                        </main>
                  </section>
                  {/* Home_Business Section */}
                  <Home_Portfolio />
                  {/* Home_Payment Section */}
                  <section className=" w-full overflow-hidden py-14">
                        <main className=" mt-12 container">
                              <Home_Payment />
                        </main>
                  </section>
                  {/* Home_Service Section */}
                  <Home_Service />
                  {/* Home_Contact Section */}
                  <Home_Contact />
                  {/* Home_Newsletter Section */}
                  <section className=" w-full overflow-hidden py-14">
                        <main className=" mt-12 container">
                              <Home_Newsletter />
                        </main>
                  </section>
            </>
      )
}