import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const ContactUs = () => {
  const form = useRef();

  const Service_ID = "service_5xmrtif";
  const Template_ID = "template_3hulwei";
  const User_ID = "lqNlqmNmINpnFDQIv";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(Service_ID, Template_ID, form.current, User_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <>

      <section class="p-6 w-full flex justify-center bg-[#0e485267] bg-opacity-30 items-center">
        <div className="h-full rounded-2xl w-full lg:w-[70%] bg-gradient-to-r from-[#0a53a07a] to-[#23a5a595]">
          <div class="py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-[2rem] uppercase py-6 font-climate leading-relaxed tracking-widest drop-shadow-3xl font-extrabold text-center text-gray-900 dark:text-white max-[420px]:text-base">
              Inquire
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div>
                <label
                  name="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="email@rccg.com"
                  require
                />
              </div>
              <div>
                <label
                  name="subject"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div>
                <label
                  name="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  id="subject"
                  class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder=""
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  name="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                value="Send"
                class="py-3 px-5 text-lg font-medium font-sans text-center text-white rounded-lg bg-[#2791a4b8] sm:w-fit hover:bg-[#2a93a6] focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
        </div>

      </section>
    </>
  );
};

export default ContactUs;
