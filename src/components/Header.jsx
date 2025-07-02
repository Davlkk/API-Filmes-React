function Header() {
  return (
    <header className="m-10 w-full min-h-full from-stone-900 py-8 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          MARK MOVIES
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Explore os filmes mais populares do momento
        </p>
      </div>
    </header>
  );
}

export default Header;
