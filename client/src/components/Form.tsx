import { useState } from "react";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = () => {
  const [form, setform] = useState<any>({
    name: {
      content: "",
    },
    email: {
      content: "",
    },
    subject: {
      content: "",
    },
    message: {
      content: "",
    },
  });
  const changeHandler = (e: any, name: string) => {
    setform((prev: any) => {
      return {
        ...prev,
        [name]: {
          ...prev[name],
          content: e.target.value,
        },
      };
    });
  };
  return (
    <div className="flex items-start w-full h-full mt-8">
      <div className="w-[50%]">
        <h1 className="font-bold text-2xl mb-11">Get in touch</h1>
        <p className="font-normal text-lg w-[90%]">
          I’m very approachable and would love to speak to you. Feel free to
          call, send me an email . Follow me in social media or simply complete
          the enquiry form.
        </p>
        {[
          {
            icon: faPhone,
            href: "tel:+216-50-721-008",
            content: "+216-50-721-008",
            target: "",
          },
          {
            icon: faLinkedin,
            href: "tel:+216-50-721-008",
            content: "+216-50-721-008",
          },
          {
            icon: faGithub,
            href: "https://github.com/fawzii0x3",
            content: "fawzii0x3",
          },
          {
            icon: faEnvelope,
            href: "mailto:mbenchikha5@gmail.com",
            content: "benchikha.work@gmail.com",
          },
        ].map(({ icon, href, content, target = "_blank" }, idx) => {
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
      </div>
      <form className="w-[50%] flex flex-col gap-7 items-start" method="post">
        <h1 className="font-bold text-2xl">Send me a message</h1>
        {[
          { type: "text", name: "name", content: "Name" },
          { type: "email", name: "email", content: "Email adress" },
          { type: "text", name: "subject", content: "subject" },
          {
            type: "textarea",
            name: "message",
            content: "Your message",
            height: "h-52",
          },
        ].map(({ type, name, content, height = "h-10" }, idx) => {
          return (
            <div key={idx} className="relative z-0 w-full">
              {type === "textarea" ? (
                <textarea
                  id={name}
                  className={`${height}  block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                  placeholder=" "
                  value={form.message.content}
                  onChange={(e) => {
                    changeHandler(e, name);
                  }}
                ></textarea>
              ) : (
                <input
                  type={type}
                  id={name}
                  className={`${height}  block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                  placeholder=" "
                  value={form[name].content}
                  onChange={(e) => {
                    changeHandler(e, name);
                  }}
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
          onClick={() => {
            console.log(form);
          }}
          className="font-normal text-base px-6 bg-[#ffffff17] py-3 rounded mx-auto"
        >
          send message
        </button>
      </form>
    </div>
  );
};

export default Form;
