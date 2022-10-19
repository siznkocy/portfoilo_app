import React from "react";

const Contact = () => {
  return (
    <div
      name="contacts"
      className="w-full h-screen bg-inherit flex justify-center items-center p-4"
    >
      <div>
        <div className="pb-8">
          <h2 className="text-3xl text-teal-600">Contact</h2>
          <p className="dark:text-gray-400 leading-10  text-lg">
            {<span className="text-teal-500 font-semibold mr-1">//</span>}
            {"Submit the form below or shoot me an email - "}
            <span className="text-teal-500 font-semibold ">
              nkosi.sizweaubrey@gmail.com
            </span>
          </p>
        </div>
        <div>
          <form
            method="POST"
            action="https://getform.io/f/2de68bc9-cea8-49ec-b7d0-6f5897fc81bb"
            className="flex flex-col max-w-[600px]w-full"
          >
            <input
              className="p-2 bg-sky-100"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="my-4 p-2 bg-sky-100"
              type="text"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="bg-sky-100 p-2"
              name="message"
              cols="30"
              rows="5"
              placeholder="Message"
            ></textarea>
            <button className="text-white rounded-sm bg-teal-500 hover:bg-teal-300 px-4 py-3 my-8 mx-auto hover:text-gray-600">
              Let's Collaborate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
