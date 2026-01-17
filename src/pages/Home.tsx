import React from "react";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home flex justify-between items-center flex-col h-full py-8">
      <div>
        <h2 className="text-center">
          <span className="text-6xl">DailyList</span>
          <br />
          by Koji Aquilino
        </h2>
        <p className="my-5">
          A simple daily to-do list maker to keep your day on track.
        </p>
      </div>

      <div className="flex flex-row gap-4 mt-auto">
        <button
          className="bg-neutral-700 rounded-lg border border-neutral-600 p-3 hover:cursor-pointer hover:bg-neutral-500 transition-colors duration-150"
          onClick={() => console.log("login")}
        >
          Login
        </button>
        <button
          className="bg-neutral-700 rounded-lg border border-neutral-600 p-3 hover:cursor-pointer hover:bg-neutral-500 transition-colors duration-150"
          onClick={() => console.log("sign up")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Home;
