import React from 'react';
// import { cerData } from './CertificatesData';
import  Certificate1  from './certificates/c1.jpg'
import  Certificate2  from './certificates/c2.jpg'
import  Certificate3  from './certificates/c3.jpg'
import  Certificate4  from './certificates/c4.png'
import  Certificate5  from './certificates/c5.jpg'
import  Certificate6  from './certificates/c6.jpg'
import  Certificate7  from './certificates/c7.jpg'
import  Certificate8  from './certificates/c8.jpg'
import  Certificate9  from './certificates/c9.jpg'
// import {Certificate1} from './certificates/Coursera 9F2JMHY3FBSS1024_1.jpg'

export default function Certificates() {
//   const myCertificates = cerData.map((item) => (
//     <div key={item.id}>
//         <img src={item.Image} alt={`Certificate ${item.id}`} />
//       <p>Hello</p>
//     </div>
//   ));

const myCertificates = [
    {
      img: Certificate1,
    //   name: "Calculator",
    },
    {
        img: Certificate2,
        // name: "Calculator",
      },
      {
        img: Certificate3,
        // name: "Calculator",
      },
      {
        img: Certificate4,
        // name: "Calculator",
      },
      {
        img: Certificate5,
        // name: "Calculator",
      },
      {
        img: Certificate6,
        // name: "Calculator",
      },
      {
        img: Certificate7,
        // name: "Calculator",
      },
      {
        img: Certificate8,
        // name: "Calculator",
      },
      {
        img: Certificate9,
        // name: "Calculator",
      },
  ];

//   return (
//     <div>
//          <section id="skills" className="py-10 bg-gray-800 relative">
//       <div className="mt-8 text-gray-100 text-center">
//       <h1 className="text-4xl font-semibold">
//           My <span className="text-cyan-600 my-10">Certifications</span>
//         </h1>
//                 {myCertificates.map((content) => (
//                   <div  className="mt-8 text-3xl flex flex-col items-center md:justify-start justify-center gap-5">
            
//                       <img className='w-32' src= {content.img} alt='certificates'/>
                    
//                   </div>
//                 ))}
//               </div>
//             </section>
//     </div>
//   );

return (
    <div className='lg:mx-0 mx-[-90px]'>
      <section id="certificates" className="py-10 bg-gray-800 relative ml-12 lg:ml-0">
        <div className="mt-8 text-gray-100 text-center">
          <h1 className="text-4xl font-semibold">
            My <span className="text-cyan-600 my-10">Certifications</span>
          </h1>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {myCertificates.map((content, index) => (
              <div key={index} className="mt-8 text-3xl flex flex-col items-center md:justify-start justify-center gap-5">
                <img className="card w-64 md:w-40 lg:w-48" src={content.img} alt={`Certificate ${index + 1}`} />
                <p className="mt-2">{content.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}