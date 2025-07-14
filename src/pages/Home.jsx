import ListMovies from "../components/ListMovies";
import Header from "../components/Header";

function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden flex flex-col justify-start items-center p-6 gap-5 bg-stone-900 text-gray-300">
      <Header />
      <ListMovies />
    </div>
  );
}

export default Home