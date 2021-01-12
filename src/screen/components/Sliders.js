import React, { useState } from "react";

const Sliders = () => {
  const slides = [
    {
      title: "Today's workout plan",
      text: "We're gonna do 3 fundamental exercises.",
    },
    {
      title: "First, 10 push-ups",
      text: "Do 10 reps. Remember about full range of motion. Don't rush.",
    },
    {
      title: "Next, 20 squats",
      text: "Squats are important. Remember to keep your back straight.",
    },
    {
      title: "Finally, 15 sit-ups",
      text: "Slightly bend your knees. Remember about full range of motion.",
    },
    {
      title: "Great job!",
      text: "You made it, have a nice day and see you next time!",
    },
  ];

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide + 1);
  };
  const previousSlide = () => {
    setSlide(slide - 1);
  };
  return (
    <div>
      <div className="container">
        <h1>Sliders</h1>
        <div className="sliders">
          <h3>{slides[slide].title}</h3>
          <p>{slides[slide].text}</p>
        </div>

        <div className="controls">
          <button
            className="btn"
            onClick={() => {
              setSlide(0);
            }}
          >
            Restart
          </button>

          <button
            onClick={() => {
              previousSlide();
            }}
            className={"btn " + (slide === 0 ? "disable" : "")}
          >
            Previous
          </button>
          <button
            onClick={() => {
              nextSlide();
            }}
            className={"btn " + (slide === slides.length - 1 ? "disable" : "")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
