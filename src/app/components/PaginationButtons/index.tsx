export const PaginationButtons = () => {
    return (
      <div className="inline-flex hidden items-center justify-center gap-4 py-3 lg:flex">
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-full border-0 bg-[#EFEFEF] text-[#6F6E6E] hover:bg-colorPrimary hover:text-white transition-all duration-200 p-3"
        >
          <span className="sr-only">Previous Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
  
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-full border-0 bg-colorPrimary text-white hover:text-white transition-all duration-200 p-3"
        >
          <span className="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    );
  };
  