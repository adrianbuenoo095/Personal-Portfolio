import { ReactElement } from "react";
import ContactForm from "./ContactForm";

const Contact = (): ReactElement => {
    return (
        <div id="Contact" className="bg-pink w-screen h-screen ">
                <ContactForm />
        </div>
    );
};

export default Contact;
