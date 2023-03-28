import * as React from "react";

export class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" className="footer-section">
        <p>&copy; {new Date().getFullYear()}&nbsp;The pocman</p>
      </footer>
    );
  }
}
