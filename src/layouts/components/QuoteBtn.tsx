"use client";

import Link from "next/link";

const QuoteBtn = () => {

  return (
    <Link href="/quote" className="navbar-brand">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get a Quote
      </button>
    </Link>
  );
};

export default QuoteBtn;
