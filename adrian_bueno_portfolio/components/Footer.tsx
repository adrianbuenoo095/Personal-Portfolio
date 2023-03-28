import * as React from "react";
import { getsCurrentYear } from "../src/getsCurrentYear";

export default function Footer() {
  const date = getsCurrentYear();
  return (
    <footer id="footer" className="footer-section">
      <p>
        &copy; <em>{date}</em>&nbsp;The pocman
      </p>
    </footer>
  );
}
