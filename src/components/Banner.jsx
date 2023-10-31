import React, { useState, useEffect } from "react";
// import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import banner from "../assets/computer.png";
import TrackVisibility from "react-on-screen";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Fullstack", "Frontend", "Backend"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <section className="banner mt-5" id="home">
      <div className="">
        <div className="grid grid-cols-12 gap-6">
          <div className="md:col-span-6 col-md-6 col-xl-6 col-span-12 m-5">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn  h-[500px]" : "h-[500px]"
                  }
                >
                  {/* <span className="tagline">Welcome to my Portfolio </span> */}
                  <h1 className=" dark:text-white">
                    {`Hi! I'm Bijhoo`} <br /><br />
                    <span
                      className="txt-rotate dark:text-white "
                      dataPeriod="1000"
                      data-rotate='["Web Developer", "Fullstack", "Frontend", "Backend"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p className="mt-[50px] h-60 tracking-wide ">
                    A tech entusiast, I feel more enjoyable when doing coding so I decide to join Bootcamp at Hacktiv8 seriously.
                    Currently I working as Frontend Developer, but I also have experience to build a Fullstack
                    Web App.
                    Feel free to contact me.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </div>
          <div className="md:col-span-6 col-md-7 col-xl-7 col-span-12  ">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__zoomIn h-[500px] "
                      : " h-[500px]"
                  }
                >
                    <img src={banner} alt="Header Img"  />
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
