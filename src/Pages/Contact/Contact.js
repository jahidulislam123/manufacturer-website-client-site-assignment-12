import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ekovyxr",
        "template_gargfi2",
        form.current,
        "qhTf4_6KvXZY-GbNi"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email has been sent !!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label class="mr-6">Name : </label>
        <input
          type="text"
          name="user_name"
          placeholder="Type here"
          class="input  input-bordered input-primary w-full max-w-xs"
        />{" "}
        <br></br>
        <br></br>
        <label class="mr-5">Email : </label>
        <input
          type="email"
          name="user_email"
          placeholder="Type here"
          class="input input-bordered input-secondary w-full max-w-xs"
        />{" "}
        <br></br>
        <br></br>
        <label>Message : </label>
        <textarea
          class="input input-bordered input-lg w-full max-w-xs"
          name="message"
        />{" "}
        <br></br>
        <br></br>
        <label>
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;{" "}
        </label>
        <input
          class="btn ml-19 w-80 btn-outline btn-success"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default Contact;
