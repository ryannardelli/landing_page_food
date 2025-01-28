import { CardAbout } from "../CardAbout";
export const HeroAbout = () => {
  return (
    <section className="text-gray-600 body-font bg-white dark:bg-slate-900">
      <div className="container mx-auto flex lg:px-24 md:py-10 md:flex-col lg:flex-row flex-col items-center">
        <div className="lg:flex-grow mt-5 md:mt-0 lg:w-1/2 md:w-full flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="uppercase text-xl font-bold text-colorSecondary tracking-wide mb-4 md:mb-0">
            Nossa história e serviços
          </h1>
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight mb-4 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            Nossa Culinária e Serviços
          </h2>
          <p className="mb-8 text-2xl leading-relaxed text-[#555555]">
            Enraizados na paixão, nós criamos experiências gastronômicas
            inesquecíveis e oferecemos serviços excepcionais, combinando arte
            culinária com hospitalidade calorosa.
          </p>
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-flex text-white bg-colorPrimary border-0 py-2 px-6 hover:bg-assets rounded-full text-lg shadow-lg hover:shadow-xl font-semibold"
            >
              Explore
            </a>
          </div>
        </div>

        <div className="mb-5 lg:mb-0 lg:w-1/2 lg:w-3/6">
          <CardAbout />
        </div>
      </div>
    </section>
  );
};
