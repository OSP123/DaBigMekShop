"use client";

import Link from "next/link";

const QuoteBtn = () => {

  return (
    <Link href="/quote" className="navbar-brand">
      <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2">
        Get a Quote
      </button>
    </Link>
  );
};

export default QuoteBtn;
