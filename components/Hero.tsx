import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      className="max-container padding-container flex flex-col gap-20 py-10
    pb-32 md:28 lg:py-20 xl:flex-row border-2 border-red-500"
    >
      <div className="hero-map" />

      {/* Izquierda */}

      <div className="relative z-20 flex flex-1 flex-col xl:w1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Cerro San Cristobal</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Nos encantaría acompañarte en tus viajes en busca de la inmaculada
          belleza natural. Explora el mundo con solo una aplicación.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198 mil
            <span> Excelentes Reviews</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
