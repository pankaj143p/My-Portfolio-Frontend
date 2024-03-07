import React, { useState } from "react";
import axios from "axios"
import { IoIosMail } from "react-icons/io";

const Contact = () => {

  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  async function submit(e){
    e.preventDefault();
    console.log(name,email,message);
    axios.post('http://localhost:3001/data',{name,email,message})

    // .then(()=>alert("Your message has been sent!"))
    // .catch((err)=>console.log(err));


    // .then(res=>console.log(res))
    // .catch(err=>console.log(err))
  }
  

        // await axios.post("http://localhost:8000/",{
        //     name,email,message
        // })

  


  // const contact_info = [
  //   { logo: "mail", text: "pankaj114477pankaj@gmail.com" },
  //   { logo: "logo-whatsapp", text: "+91 9179213653" },
  // ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" onChange={(e)=> {setName(e.target.value)}} placeholder="Your Name" />
            <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Your Email Address" />
            <textarea placeholder="Your Message" onChange={(e)=> {setMessage(e.target.value)}} rows={10}></textarea>
            <button className="btn-primary w-fit" onClick={submit}>Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {/* {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;