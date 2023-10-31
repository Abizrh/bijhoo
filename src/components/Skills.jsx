import js from '../assets/img/logo-javascript.svg'
import nodejs from '../assets/img/nodejs-icon.svg'
import express from '../assets/img/expressjs-icon.svg'
import sequelize from '../assets/img/sequelizejs-icon.svg'
import reactsvg from '../assets/img/reactjs-icon.svg'
import vuejs from '../assets/img/vuejs-icon.svg'
import tailwind from '../assets/img/tailwindcss-icon.svg'
import postgre from '../assets/img/postgresql-icon.svg'
import mongo from '../assets/img/mongodb-icon.svg'
import graph from '../assets/img/graphql-icon.svg'
import redis from '../assets/img/redis-icon.svg'
import jest from '../assets/img/jestjsio-icon.svg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Below is list of my skills when learning to making a Web Application.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={express} alt="Image" />
                                <h5>Express.js</h5>
                            </div>
                            <div className="item">
                                <img src={sequelize} alt="Image" />
                                <h5>Sequelize.js</h5>
                            </div>
                            <div className="item">
                                <img src={reactsvg} alt="Image" />
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src={vuejs} alt="Image" />
                                <h5>Vue.js</h5>
                            </div>
                            <div className="item">
                                <img src={tailwind} alt="Image" />
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src={postgre} alt="Image" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={mongo} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={graph} alt="Image" />
                                <h5>GraphQL</h5>
                            </div>
                            <div className="item">
                                <img src={redis} alt="Image" />
                                <h5>Redis</h5>
                            </div>
                            <div className="item">
                                <img src={jest} alt="Image" />
                                <h5>Jest</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
