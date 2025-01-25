import { MiniCard } from "../MiniCard";
import { Bubble } from "../Bubble";
export const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-white dark:bg-slate-900 font-inter">
      <div className="container mx-auto flex flex-col-reverse md:flex-col lg:flex-row items-center lg:px-24 lg:py-10">
        <div className="lg:flex-grow mt-5 md:mt-0 lg:w-3/5 lg:pr-24 md:pr-16 flex flex-col items-center lg:items-start text-center lg:text-left mb-16 lg:mb-0">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            Se Delicie Com As Maravilhas Da{" "}
            <span className="text-colorPrimary">Food</span>
          </h1>
          <p className="mb-8 px-4 lg:px-0 leading-relaxed dark:text-gray-300 font-medium text-2xl tracking-wide">
            Onde cada prato tece uma história de maestria culinária e artesanato
            apaixonado
          </p>
          <div className="flex justify-center lg:justify-start">
            <a
              href="#"
              className="inline-flex text-white bg-colorPrimary border-0 py-2 px-6 hover:bg-assets rounded-full text-lg shadow-lg hover:shadow-xl font-semibold"
            >
              Pedir Agora
            </a>
            <a
              href="#"
              className="ml-4 inline-flex items-center text-gray-700 border-0 px-6 rounded text-lg transition-all duration-300 font-semibold"
            >
              Assistir Vídeo
              <i className="bi bi-play-fill ml-2 text-2xl text-assets bg-white rounded-full flex items-center justify-center h-10 w-10 shadow-lg"></i>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full mb-10 md:mb-0 md:w-1/2 w-full flex justify-center">
          <div className="relative bg-colorPrimary h-80 w-80 rounded-full">
            <img
              src="/img/image-hero.png"
              alt="Image Hero"
              className="absolute top-0 left-0 right-0 bottom-0 m-auto h-80 w-80 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-end gap-4 -mt-[8%] hidden md:flex md:flex md:mr-[15%] lg:mr-[10%]">
        <MiniCard
          name="Batata Frita"
          price={12}
          img="img/img-mini-card-1.png"
          stars={3}
        />
        <MiniCard
          name="Hamburguer"
          price={22}
          img="img/img-mini-card-2.png"
          stars={4}
        />
      </div>
      <div className="relative hidden md:flex">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 md:-top-80 md:left-60 md:-translate-x-1/2 lg:-top-80 lg:left-1/2 lg:-translate-x-1/4">
          <Bubble />
        </div>
      </div>
      {/* <div className="relative w-full h-screen">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-blue-500 p-4">
          Este é o balão fixo!
        </div>
      </div> */}
    </section>
  );
};

// export const Hero = () => {
//   return (
//     <section className="text-gray-600 body-font bg-white dark:bg-slate-900 font-inter">
//       <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
//         <div className="lg:flex-grow mt-5 md:mt-0 md:w-3/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//           <h1 className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
//             Se Delicie Com As Maravilhas Da{" "}
//             <span className="text-colorPrimary">Food</span>
//           </h1>
//           <p className="mb-8 md:pl-0 pl-2 pr-2 leading-relaxed dark:text-gray-300 font-medium text-2xl tracking-wide">
//             Onde cada prato tece uma história de maestria culinária e artesanato
//             apaixonado
//           </p>
//           <div className="flex justify-center">
//             <a
//               href="#"
//               className="inline-flex text-white bg-colorPrimary border-0 py-2 px-6 hover:bg-assets rounded-full text-lg shadow-lg hover:shadow-xl font-semibold"
//             >
//               Pedir Agora
//             </a>
//             <a
//               href="#"
//               className="ml-4 inline-flex items-center text-gray-700 border-0 px-6 rounded text-lg transition-all duration-300 font-semibold"
//             >
//               Assistir Vídeo
//               <i className="bi bi-play-fill ml-2 text-2xl text-assets bg-white rounded-full flex items-center justify-center h-10 w-10  shadow-lg"></i>
//             </a>
//           </div>
//         </div>
//         <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-full flex justify-center">
//           <div className="relative bg-colorPrimary h-80 w-80 rounded-full">
//             <img
//               src="/img/image-hero.png"
//               alt="Image Hero"
//               className="absolute top-0 left-0 right-0 bottom-0 m-auto h-80 w-80 object-cover rounded-full shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-end mr-[10%] -mt-[8%] hidden sm:flex">
//         <MiniCard
//               name="Batata Frita"
//               price={12}
//               img="img/img-mini-card-1.png"
//               stars={3}
//             />
//         <MiniCard
//               name="Hamburguer"
//               price={22}
//               img="img/img-mini-card-2.png"
//               stars={4}
//             />
//       </div>
//       <div className="flex justify-end mr-[34%] -mt-[24%] hidden sm:flex">
//         <Bubble />
//       </div>
//     </section>
//   );
// };
