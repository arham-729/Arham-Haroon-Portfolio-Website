import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // Import EmailJS

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // 🔴 REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    emailjs
      .send(
        "service_p5c0orm",    // e.g. service_xyz
        "template_7y20kek",   // e.g. template_xyz
        {
          from_name: form.name,
          to_name: "Arham",
          to_email: "arhamharoonansari70@gmail.com",
          message: form.message,
        },
        "5R45I04isFGccgnQv"     // e.g. user_xyz
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* --- EXISTING CONTACT INFO --- */}
        <div className="mt-8 mb-8 text-white text-[18px] leading-[30px] flex flex-col gap-4">
          <p>
            <strong>📞 Phone:</strong> 0300-5230274
          </p>
          <p>
            <strong>📧 Email:</strong>{" "}
            <a
              href="mailto:arhamharoonansari70@gmail.com?subject=Contact from Portfolio"
              className="text-blue-400 hover:underline"
            >
              arhamharoonansari70@gmail.com
            </a>
          </p>
          <p>
            <strong>🔗 LinkedIn:</strong>{" "}
           <a
  href="https://www.linkedin.com/in/arham-haroon-7a6bb8243"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-400 hover:underline"
>
  /arham-haroon
</a>

          </p>
        </div>

        {/* --- NEW CONTACT FORM --- */}
        <p className="text-white font-medium mb-4 mt-10 border-t border-gray-700 pt-6">
          Or send me a message directly:
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");