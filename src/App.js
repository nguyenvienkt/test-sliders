import Articles from "./screen/components/Articles";
import Sliders from "./screen/components/Sliders";
import "./App.css";
import { useState } from "react";

function App() {
  const [showComponent, setShowComponent] = useState(true);
  // const [slides, setSlide] = useState([
  //   {
  //     title: "Today's workout plan",
  //     text: "We're gonna do 3 fundamental exercises.",
  //   },
  //   {
  //     title: "First, 10 push-ups",
  //     text: "Do 10 reps. Remember about full range of motion. Don't rush.",
  //   },
  //   {
  //     title: "Next, 20 squats",
  //     text: "Squats are important. Remember to keep your back straight.",
  //   },
  //   {
  //     title: "Finally, 15 sit-ups",
  //     text: "Slightly bend your knees. Remember about full range of motion.",
  //   },
  //   {
  //     title: "Great job!",
  //     text: "You made it, have a nice day and see you next time!",
  //   },
  // ]);

  // let pageNumber = [];
  // for (var i = 0; i < slides.length; i++) {
  //   pageNumber.push(i);
  // }

  const ARTICLES = [
    {
      title: "A message to our customers",
      upvotes: 12,
      date: "2020-01-24",
    },
    {
      title: "Alphabet earnings",
      upvotes: 22,
      date: "2019-11-23",
    },
    {
      title: "Artificial Mountains",
      upvotes: 2,
      date: "2019-11-22",
    },
    {
      title: "Scaling to 100k Users",
      upvotes: 72,
      date: "2019-01-21",
    },
    {
      title: "the Emu War",
      upvotes: 24,
      date: "2019-10-21",
    },
    {
      title: "What's SAP",
      upvotes: 1,
      date: "2019-11-21",
    },
    {
      title: "Simple text editor has 15k monthly users",
      upvotes: 7,
      date: "2010-12-31",
    },
  ];

  return (
    <div>
      <header>
        <nav className="nav-bar">
          <ul>
            <li>
              <a href="#">K-Soft</a>
            </li>
          </ul>
          <ul>
            <li onClick={() => setShowComponent(true)}>Sliders</li>
            <li onClick={() => setShowComponent(false)}>Articles</li>
          </ul>
        </nav>
      </header>
      {showComponent ? <Sliders /> : <Articles />}

      <div></div>
      <hr />
      {/* {pageNumber.map((item, index) => {
        return (
          <ul>
            <li>{item + 1}</li>
          </ul>
        );
      })} */}
    </div>
  );
}

export default App;
