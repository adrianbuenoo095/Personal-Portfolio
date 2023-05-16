import type { ReactElement } from  "react";

const Footer = (): ReactElement => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="text-center">
      <p>&copy; The pocman {currentYear}&nbsp;</p>
    </footer>
  );
};

export default Footer;
