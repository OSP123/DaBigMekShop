"use client";

import config from "@/config/config.json";
import Link from "next/link";

const Title = () => {
  // destructuring items from config object
  const {
    title,
  }: {
    title: string;
  } = config.site;

  return (
    <Link href="/" className="navbar-brand inline-block">
      <h1 id="title">{title}</h1>
    </Link>
  );
};

export default Title;
