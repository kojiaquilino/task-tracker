import React from "react";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home">
      <h2 className="font-bold text-2xl">Welcome</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
        consectetur enim impedit porro cupiditate perferendis distinctio,
        tempora voluptatibus dolor, quas pariatur ullam quaerat quam nam
        excepturi facere vitae alias quibusdam!
      </p>
    </div>
  );
};

export default Home;
