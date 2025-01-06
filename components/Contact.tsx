import { ReactElement } from "react";
import ContactForm from "./ContactForm";

const Contact = (): ReactElement => {
    return (
        <div id="Contact" className="bg-pink w-screen h-screen ">
            <div className="text-center">
                <h1>Get in Touch</h1>
            </div>
                <ContactForm />
        </div>
    );
};

export default Contact;
