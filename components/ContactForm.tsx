import { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export type FormData = {
    name: string;
    email: string;
    message: string;
};

const ContactForm = (): ReactElement => {
    const { register, handleSubmit } = useForm<FormData>();
    const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

    return (

        <div>
            <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 text-white">Get in Touch</h1>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">I'll get back to you within 24 hours.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-white"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="border border-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5"
                            {...register("name", { required: true })}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-white"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="example@domain.com"
                            className="border border-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5"
                            {...register("email", { required: true })}
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <div>
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-white"
                        >
                            Message
                        </label>
                        <textarea
                            rows={4}
                            placeholder="Type your message"
                            className="block p-2.5 w-full text-sm text-gray rounded-lg border border-gray-300 focus:ring-blue focus:border-blue"
                            {...register("message", { required: true })}
                        ></textarea>
                    </div>
                </div>
                <div className="p-2 w-full">
                    <button
                        className="text-white font-bold bg-blue hover:bg-orange focus:ring-4 focus:outline-none focus:ring-blue rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
