import { ReactElement } from "react";
import ContactForm from "./ContactForm";

const Contact = (): ReactElement => {
    return (
        <div id="Contact" className="bg-pink w-screen">
            <div className="text-center">
                <h1 className="font-bold text-lg">Get in Touch</h1>
                <p>I'll get back to you within 24 hours.</p>
            </div>
            <div className="flex h-screen justify-center items-center">
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
