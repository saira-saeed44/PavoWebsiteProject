import React from "react";
import { cardsData } from "../data";

const Cards = ({ data }) => {
  return (
    <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
      {data.map((card) => (
        <div
          key={card.id}
          className="max-w-sm rounded overflow-hidden shadow-lg bg-teal-50  text-purple-600 p-6 m-4"
        >
          <div className="text-5xl flex justify-center pt-5">{card.icon}</div>
          <h2 className="font-bold text-gray-600 flex justify-center">
            {card.heading}
          </h2>
          <p className="text-gray-500 pb-7 text-base">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Cards data={cardsData} />
    </div>
  );
};

export default App;
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMobileAlt, faMemory, faTachometerAlt, faLanguage, faSyncAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

// const Cards = ({ data }) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
//       {data.map((card) => (
//         <div key={card.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
//           <FontAwesomeIcon icon={card.icon} className="text-5xl text-blue-500 mb-4" />
//           <p className="text-gray-700 text-base">{card.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;

// import React from 'react';

// const Cards = ({ data }) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
//       {data.map((card) => (
//         <div key={card.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
//           <i className={`${card.icon} text-5xl text-blue-500 mb-4`}></i>
//           <p className="text-gray-700 text-base">{card.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;

// const Cards = ({ data }) => {
//   return (
//     <div className="flex flex-wrap justify-center">
//       {data.map((card) => (
//         <div key={card.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
//           <i className={`${card.icon} text-5xl text-blue-500 mb-4`}></i>
//           <p className="text-gray-700 text-base">{card.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import cardsData from '../data';

// const Cards = () => {
//   return (
//     <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {cardsData.map((card, index) => (
//           <div key={index} className="bg-white overflow-hidden shadow-md rounded-lg p-6 flex flex-col items-center">
//             <div className="text-blue-600 mb-4">
//               <FontAwesomeIcon icon={card.icon} size="3x" />
//             </div>
//             <p className="text-gray-700 text-center">{card.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cards;

// // import React from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// // const Cards = ({ title, description,icon }) => {
// //   return (
// //     <section className="py-10 px-8 md:py-16 bg-gray-50">
// //       <div className="container max-w-screen-xl mx-auto  px-4  rounded-md ">
// //         <div className='w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4'>
// //         <FontAwesomeIcon icon={icon} className="text-gra-600 hover:text-gray-8  00 transition ease-in-out duration-500 pt-1" />

// //         </div>
// //         <div className="font-medium text-gray-700 text-lg mb-4">{title}</div>
// //         <p className="text-gray-500 font-normal text-md">{description}</p>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Cards;
