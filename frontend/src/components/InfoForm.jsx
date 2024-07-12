import React, { useState } from 'react';

export default function InfoForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const baseUrl = "http://localhost:8000";

  const sendEmail = async () => {
    let dataSend = {
      fullname: fullname,
      email: email,
      number: number,
      subject: subject,
      message: message,
    };

    const res = await fetch(`${baseUrl}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          alert("Send Successfully !");
        }
      });

      return (
        <div>Form Submitted Successfully!</div>
      )
  };
  return (
    <section className="bg-[#f3f3f3] md:flex md:px-[100px] justify-center py-16 px-8">
      <div className="flex flex-col justify-center items-center md:w-1/2 w-full">
        <div className="md:px-5 pb-[30px] flex flex-col justify-center items-center">
          <h2 className="text-[39px] text-[#383838] font-semibold">
            Leave us your info
          </h2>
          <p className="text-[19px] pt-2.5 text-[#747474]">
            and we will get back to you.
          </p>
        </div>
        <div className="flex justify-center items-center pb-[50px] mb-[30px]">
          <div className="border-[0.8px] w-[40px] border-[#2b2b2b]"></div>
        </div>
        <div className="md:grid md:grid-cols-2 gap-4 w-full">
          <div className="px-[7px] mb-[14px]">
            <input
            id='fullname'
            name='fullname'
              type="text"
              placeholder="Full Name*"
              required
              className="px-[22px] py-[15px] w-full h-[55.5px]"
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className="px-[7px] mb-[14px]">
            <input
            id='email'
            name='email'
              type="email"
              placeholder="Email*"
              required
              className="px-[22px] py-[15px] w-full h-[55.5px]"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="px-[7px] mb-[14px]">
            <input
            id='number'
            name='number'
              type="number"
              placeholder="Phone Number*"
              required
              className="px-[22px] py-[15px] w-full h-[55.5px]"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="px-[7px] mb-[14px]">
            <input
            id='subject'
            name='subject'
              type="text"
              placeholder="Subject*"
              required
              className="px-[22px] py-[15px] w-full h-[55.5px]"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full px-[7px] mb-[14px]">
          <textarea
          id='message'
            name="message"
            placeholder="Message*"
            className="w-full h-[120px] py-[18px] px-[22px]"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="bg-[#233C85] text-white mx-2 mt-4 w-full h-[51px] flex justify-center items-center">
          <button type="submit" onClick={() => sendEmail()}>Submit</button>
        </div>
      </div>
    </section>
  );
}
