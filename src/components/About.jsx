import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl">
          As a recent graduate from Institut Teknologi PLN with a Bachelor's degree in Electrical Engineering, I am excited to transition into the field of front-end engineering. My strong technical
          background, combined with my training from Binar Academy, has provided me with a solid foundation in HTML, CSS, JavaScript, and frameworks such as React. I am passionate about creating
          intuitive and engaging user experiences, and I am well-versed in responsive design principles and UI/UX best practices. I am a quick learner and have a natural ability to solve problems,
          making me well-equipped to tackle complex challenges. I am eager to bring my technical expertise, attention to detail, and drive for excellence to a dynamic organization that values
          innovation and creativity. I am confident that my unique background and commitment to learning will make me a valuable addition to any front-end engineering team.
        </p>
      </div>
    </div>
  );
};

export default About;
