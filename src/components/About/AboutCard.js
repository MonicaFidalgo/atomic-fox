import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0 text-left">
          <p>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="fas fa-heart"></i> Outdoor activities and healthy lifestyle
            </li>
            <li className="about-activity">
              <i className="fas fa-book-open"></i> Addicted to comic books
            </li>
            <li className="about-activity">
              <i className="fas fa-paw"></i> Dog shelter volunteer for 9 years
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
