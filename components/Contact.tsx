import { ReactElement } from "react";
import ContactForm from "./ContactForm";

const Contact = (): ReactElement => {
    return (
        <div id="Contact" className="bg-pink">
            <div className="grid grid-cols-1 justify-items-center bg-slate-100 p-8">
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
