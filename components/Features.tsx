// Importa constantes, componentes y librerías necesarias
import { FEATURES } from "@/constants"; // Importa una lista de características desde un archivo de constantes
import Image from "next/image"; // Utiliza Next.js Image para optimizar imágenes
import React from "react";

// Componente principal que muestra las características
const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        {/* Sección para la imagen del teléfono */}
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png" // Ruta de la imagen del teléfono
            alt="phone" // Atributo alternativo para accesibilidad
            width={440} // Ancho de la imagen
            height={1000} // Alto de la imagen
            className="feature-phone" // Clase personalizada para estilos adicionales
          />
        </div>

        {/* Sección para la descripción de las características */}
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            {/* Imagen absoluta dentro de un contenedor relativo */}
            <Image
              src="/camp.svg" // Ruta de la imagen del campamento
              alt="camp" // Atributo alternativo para accesibilidad
              width={50} // Ancho de la imagen
              height={50} // Alto de la imagen
              className="absolute left-[-5px] top-[-40px] w-10 lg:w-[50px]" // Posicionamiento y tamaño ajustables
            />
            {/* Título de la sección */}
            <h2 className="bold-40 lg:bold-64">Características</h2>
          </div>
          {/* Lista de características */}
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map(
              (
                feature // Mapeo de características
              ) => (
                <FeatureItem
                  key={feature.title} // Clave única basada en el título
                  title={feature.title} // Título de la característica
                  icon={feature.icon} // Icono asociado a la característica
                  description={feature.description} // Descripción de la característica
                />
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

// Tipo para definir la estructura de datos de cada característica
type FeatureItem = {
  title: string; // Título de la característica
  icon: string; // Icono de la característica
  description: string; // Descripción de la característica
};

// Componente para mostrar un elemento individual de característica
const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      {/* Contenedor para el icono de la característica */}
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={28} height={28} />{" "}
        {/* Icono de la
        característica */}
      </div>
      {/* Título de la característica */}
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      {/* Descripción de la característica */}
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

// Exporta el componente Features para su uso en otras partes de la aplicación
export default Features;
