// shortcut rsf
//recourse ( https://react-bootstrap.github.io/docs/components/carousel )
import React from "react";
import Carousel from "react-bootstrap/Carousel";
var HomeData = [
  {
    id: 1,
    image:
      "https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png",
    title: "First slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.!",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image:
      "https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png",
    title: "Second slide label",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image:
      "https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png",
    title: "Third slide label",
    description:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    link: "https://www.twitter.com",
  },
];

function Home() {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {HomeData.map((Data) => {
          return (
            <Carousel.Item key={Data.id}>
              <img
                className="d-block w-100"
                src={Data.image}
                alt={"slide " + Data.id}
              />
              <Carousel.Caption>
                <h2>{Data.title}</h2>
                <p>{Data.description}</p>
                <a className="btn btn-primary" href={Data.link}>
                  Learn More <i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default Home;
