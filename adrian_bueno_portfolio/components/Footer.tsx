import type { ReactElement } from "react";

const Footer = (): ReactElement => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer-section">
      <p>&copy; {currentYear}&nbsp;The pocman</p>
    </footer>
  );
};

export default Footer;
