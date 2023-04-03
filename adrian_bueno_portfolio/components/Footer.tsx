import type { ReactElement } from "react";

const Footer = (): ReactElement => {
  return (
    <footer id="footer" className="footer-section">
      <p>&copy; {new Date().getFullYear()}&nbsp;The pocman</p>
    </footer>
  );
};

export default Footer; 