import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import ContactInfo from "./constant";

const Form = () => {
  return (
    <div className="flex flex-col  w-full h-full mt-8 gap-2">
      <div className="w-full flex">
        <h1 className="w-[50%] font-bold text-2xl">Get in touch</h1>
        <h1 className="w-[50%] font-bold text-2xl">Send me a message</h1>
      </div>
      <div className="w-full flex">
        <div className="w-[50%]">
          <InfoLine />
        </div>
        <InputField />
      </div>
    </div>
  );
};

const InfoLine = () => {
  return (
    <>
      <p className="font-normal text-lg w-[90%]">
        I’m very approachable and would love to speak to you. Feel free to call,
        send me an email . Follow me in social media or simply complete the
        enquiry form.
      </p>
      {ContactInfo.map(({ icon, href, content, target = "_blank" }, idx) => {
        return (
          <a
            key={idx}
            href={href}
            className="flex items-center mt-4"
            target={target}
          >
            <div className="bg-[#ffffff17] w-[40px] h-[40px] flex items-center  justify-center rounded-[50%]">
              <FontAwesomeIcon icon={icon} />
            </div>
            <span>{content}</span>
          </a>
        );
      })}
    </>
  );
};
const InputField = () => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("/api/hire-me", form)
      .then((response: any) => {
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  const [form, setform] = useState<any>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const changeHandler = (e: any, name: string) => {
    setform((prev: any) => {
      return {
        ...prev,
        [name]: e.target.value,
      };
    });
  };
  return (
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
      className="w-[50%] flex flex-col gap-7 items-start"
    >
      {[
        { type: "text", name: "name", content: "Name" ,min:3},
        { type: "email", name: "email", content: "Email adress" },
        { type: "text", name: "subject", content: "subject",min:3 },
        {
          type: "textarea",
          name: "message",
          content: "Your message",
          height: "h-52",
          min:15
        },
      ].map(({ type, name, content, height = "h-10",min=0 }, idx) => {
        return (
          <div key={idx} className="relative z-0 w-full">
            {type === "textarea" ? (
              <textarea
                id={name}
                className={`${height}  block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
                value={form.message}
                onChange={(e) => {
                  changeHandler(e, name);
                }}
                required
                minLength={min}
              ></textarea>
            ) : (
              <input
                type={type}
                id={name}
                className={`${height}  block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
                value={form[name]}
                onChange={(e) => {
                  changeHandler(e, name);
                }}
                minLength={min}
                required
              />
            )}
            <label
              htmlFor={name}
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {content}
              <span className="text-red-600">*</span>
            </label>
          </div>
        );
      })}
      <button
        type="submit"
        className="font-normal text-base px-6 bg-[#ffffff17] py-3 rounded mx-auto"
      >
        send message
      </button>
    </form>
  );
};
export default Form;
