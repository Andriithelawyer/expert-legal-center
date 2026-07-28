"use client";

import { useEffect } from "react";

import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Services from "./components/Services";

export default function Home() {

  useEffect(() => {

    if (sessionStorage.getItem("scrollToContacts") === "true") {

      sessionStorage.removeItem("scrollToContacts");

      setTimeout(() => {

        document.querySelector("footer")?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });

      }, 200);

    }

  }, []);

  return (
    <main>

      <Hero />

      <Trust />

      <section id="services">
        <Services />
      </section>

    </main>
  );
}