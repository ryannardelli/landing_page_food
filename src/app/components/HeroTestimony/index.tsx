import { FaStar } from "react-icons/fa";

export const HeroTestimony = () => {
  return (
    <section className="text-gray-600 body-font bg-white dark:bg-slate-900">
      <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col-reverse items-center">
        <div className="lg:max-w-lg lg:w-full mb-10 md:mb-0 md:w-1/2 w-full flex justify-center relative">
          <div className="absolute bottom-0 h-52 w-72 bg-colorPrimary rounded-bl-[40px] rounded-tr-[110px] rounded-tl-[110px] rounded-br-[40px] z-0"></div>

          <img
            src="/img/img-hero-2.png"
            alt="Image Hero 2"
            className="relative z-10 w-72 h-full object-contain"
          />
        </div>

        <div className="lg:flex-grow mt-5 md:mt-0 md:w-3/4 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="uppercase text-xl font-bold text-colorSecondary tracking-wide">
            Depoimentos
          </h1>
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight mb-4 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            O que nossos clientes dizem sobre nós
          </h2>
          <p className="mb-8 text-2xl leading-relaxed text-[#555555]">
            “Tive o prazer de jantar na Food ontem à noite e ainda estou
            impressionado.”
          </p>

          <div className="flex gap-4">
            <div className="relative w-24 h-[4rem] flex items-center justify-end rounded-tr-full rounded-br-full">
              <img
                className="absolute right-2 z-30 w-11 h-11 rounded-full border-2 border-gray-200"
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                alt="avatar"
              />
              <img
                className="absolute right-8 z-20 w-11 h-11 rounded-full border-2 border-gray-200"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8cHJvZmlsZXN8ZW58MHwwfHx8MTczNjUxNDE0NHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="avatar"
              />
              <img
                className="absolute right-14 z-10 w-11 h-11 rounded-full border-2 border-gray-200"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxwcm9maWxlc3xlbnwwfDB8fHwxNzM2NTE0MTQ0fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="avatar"
              />
            </div>

            <div className="flex flex-col">
              <div className="text-xl font-semibold">
                <p>Avaliação dos clientes</p>
              </div>

              <div className="flex gap-1 items-center justify-end text-2xl">
                <FaStar className="text-yellow-400 text-2xl" />
                <p className="text-[#454545] text-lg font-semibold pr-4">4.2</p>
                <p className="text-[#807E7E] text-lg font-medium pr-4">
                  (350 avaliações)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
