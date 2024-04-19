import Image from "next/image";
import { CarCard, Hero, SearchBar } from "../components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !allCars || allCars.length < 1 || !Array.isArray(allCars);

  console.log(allCars);
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>
            Explore the car you might like
          </p>
        </div>

        <div className="home__filters">
          <SearchBar />
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map(
                (car) => <CarCard car={car}/>
              )}
            </div>
          </section>
        ):(
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no result</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}