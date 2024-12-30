import type { ReactElement } from "react";
import ContactForm from "./ContactForm";

const Contact = (): ReactElement => {
    return (
        <div id="Contact" className="bg-pink h-screen text-red">
            <div className="flex justify-center">
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
