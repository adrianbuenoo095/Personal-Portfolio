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
                <button className="text-white font-bold bg-blue hover:bg-orange focus:ring-4 focus:outline-none focus:ring-blue rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                    Submit
                </button>
            </div>
        </form>
        </div>
    );
};

export default ContactForm;
