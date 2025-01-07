import { ReactElement } from "react";
import ContactForm from "./ContactForm";

const Contact = (): ReactElement => {
    return (
        <div id="Contact" className="bg-pink w-screen ">
            <div className="text-center">
                <h1>Get in Touch</h1>
            </div>
            <div className="flex h-screen justify-center items-center">
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
