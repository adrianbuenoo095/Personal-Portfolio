import type { ReactElement } from "react";
import ContactMe from "./ContactForm";

const Contact = (): ReactElement => {
    return (
        <div id="Contact" className="bg-pink h-screen text-red">
            <div className="flex justify-center items-center">
                <ContactMe />
            </div>
        </div>
    );
};

export default Contact;
