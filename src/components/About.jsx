import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempore nesciunt libero ut aut, sint vel odio maiores ducimus, impedit aliquid doloremque, quaerat consequuntur enim eaque
          eos commodi reprehenderit architecto!
        </p>

        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum saepe dicta natus ut nam consectetur atque earum, praesentium recusandae ullam necessitatibus quo accusamus, libero molestias
          nostrum iusto odit. Aspernatur, velit.
        </p>
      </div>
    </div>
  );
};

export default About;
