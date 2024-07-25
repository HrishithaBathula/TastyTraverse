import "../../styles/home.css";
import Header from "../Header";
import Search from './Search';
import QuickSearch from './QuickSearch';

export function Home() {
  return (
    <>
      <div className="header position-relative"> 
        <Header/>
        <div className="container">
          <div id="logo" className="text-center position-absolute">
              <i>Tt!</i>
          </div>
            
          <h1 className="h1 text-center position-absolute">
            Find the best restaurants, cafes and bars
          </h1>
          <Search />
        </div>
      </div>
      <section>
        <h2 className="fs-2">Quick Searches</h2>
        <p className="fs-6"> Discover restaurants by type of meal </p>
      </section>
      <QuickSearch />
    </>
  )
}
