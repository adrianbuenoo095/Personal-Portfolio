import * as React from "react";

export class Portfolio extends React.Component {
  render() {
    return (
      <div id="portfolio" className="portfolio">
        <h1 className="testing">Adrian's Work</h1>
        <ul className="skills-set">
          <li>
            <a href="">Web Designer</a>
          </li>
          <li>
            <a href="">Illustrator</a>
          </li>
          <li>
            <a href="">Full-Stack</a>
          </li>
        </ul>
      </div>
    );
  }
}
