import { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export type FormData = {
    name: string;
    email: string;
    message: string;
};
const ContactMe = (): ReactElement => {
    const { register, handleSubmit } = useForm<FormData>();
    const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
                <label htmlFor="name" className="">
                    Full Name
                </label>
                <input
                    type="text"
                    placeholder="Full Name"
                    className=""
                    {...register("name", { required: true })}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="">
                    Email Address
                </label>
                <input
                    type="email"
                    placeholder="example@domain.com"
                    className=""
                    {...register("email", { required: true })}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="message" className="">
                    Message
                </label>
                <textarea
                    rows={4}
                    placeholder="Type your message"
                    className=""
                    {...register("message", { required: true })}
                ></textarea>
            </div>
            <div>
                <button className="">Submit</button>
            </div>
        </form>
    );
};

export default ContactMe;
