"use client";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button, MegaMenu, Navbar } from "flowbite-react";

export const Header = () => {
  return (
    <MegaMenu>
      <div className="mx-auto space-x-8 flex max-w-screen-xl flex-wrap items-center justify-between p-4 max-md:space-x-0 lg:space-x-8 xl:space-x-8 2x1:space-x-8 font-poppins">
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <div className="flex items-center gap-3 rtl:space-x-reverse transition-all duration-300 transform hover:scale-105">
              <span className="self-center text-xl font-extrabold whitespace-nowrap tracking-widest uppercase dark:text-white">
                <span className="font-extrabold bg-colorPrimary p-2 rounded-md text-white shadow-md hover:shadow-lg">
                  F
                </span>
                <span className="ml-1 text-gray-800 dark:text-gray-200">
                  ood
                </span>
              </span>
            </div>
          </span>
        </Navbar.Brand>
        <div className="order-2 mt-4 lg:mt-0 flex items-center md:flex">
          <div className="flex space-x-8">
            <a
              href="#"
              className="flex items-center justify-center w-12 h-12 text-white bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 rounded-full shadow-md transition-all duration-300 transform hover:scale-110 hover:shadow-lg focus:ring-4 focus:ring-pink-300 focus:outline-none"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram text-xl"></i>
            </a>

            <a
              href="#"
              className="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full shadow-md transition-all duration-300 transform hover:scale-110 hover:shadow-lg focus:ring-4 focus:ring-blue-300 focus:outline-none"
              aria-label="Twitter"
            >
              <i className="bi bi-twitter text-xl"></i>
            </a>
          </div>
          <Button
            href="#"
            className="flex items-center ml-4 text-xl px-6 bg-gradient-to-r from-colorPrimary to-colorPrimary text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:bg-colorPrimary"
          >
            <i className="bi bi-telephone text-xl mr-2"></i>
            <span className="text-xl">Contato</span>
          </Button>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" className="text-xl">
          <span className="text-xl text-colorPrimary hover:text-colorPrimary">Home</span>
          </Navbar.Link>
          <MegaMenu.Dropdown
            toggle={
              <span className="text-xl hover:text-colorPrimary">Menu</span>
            }
          >
            <ul className="grid grid-cols-3 text-xl">
              <div className="space-y-4 p-4">
                <li>
                  <a
                    href="#"
                    className="hover:text-colorPrimary dark:hover:text-colorPrimary"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-colorPrimary dark:hover:text-colorPrimary"
                  >
                    Depoimentos
                  </a>
                </li>
              </div>
              <div className="space-y-4 p-4">
                <li>
                  <a
                    href="#"
                    className="hover:text-colorPrimary dark:hover:text-colorPrimary"
                  >
                    Contato
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-colorPrimary dark:hover:text-colorPrimary"
                  >
                    Ofertas
                  </a>
                </li>
              </div>
              <div className="space-y-4 p-4">
                <li>
                  <a
                    href="#"
                    className="hover:text-colorPrimary dark:hover:text-colorPrimary"
                  >
                    Newsletter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-colorPrimary dark:hover:text-colorPrimary"
                  >
                    Blog
                  </a>
                </li>
              </div>
            </ul>
          </MegaMenu.Dropdown>
          <MegaMenu.Dropdown
            toggle={
              <span className="text-xl hover:text-colorPrimary">Serviços</span>
            }
          >
            <ul className="grid grid-cols-3 text-xl">
              <div className="space-y-4 p-4">
                <li>
                  <a
                    href="#"
                    className="hover:text-colorPrimary dark:hover:text-colorPrimary"
                  >
                    Nossos Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-colorPrimary dark:hover:text-colorPrimary"
                  >
                    O que fazemos
                  </a>
                </li>
              </div>
              <div className="space-y-4 p-4">
                <li>
                  <a
                    href="#"
                    className="hover:text-colorPrimary dark:hover:text-colorPrimary"
                  >
                    Especialidades
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-colorPrimary dark:hover:text-colorPrimary"
                  >
                    Campanha
                  </a>
                </li>
              </div>
              <div className="space-y-4 p-4">
                <li>
                  <a
                    href="#"
                    className="hover:text-colorPrimary dark:hover:text-colorPrimary"
                  >
                    Diagnóstico
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-colorPrimary dark:hover:text-colorPrimary"
                  >
                    Entrega
                  </a>
                </li>
              </div>
            </ul>
          </MegaMenu.Dropdown>
          <Navbar.Link href="#" className="text-xl text-black hover:text-colorPrimary">
            <span className="text-xl hover:text-colorPrimary">Ofertas</span>
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
    </MegaMenu>
  );
};
