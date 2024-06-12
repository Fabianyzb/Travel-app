import Image from "next/image";

// TypeScript: Definición de tipos para las props del componente
type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string; // "?" = opcional
  variant: "btn_dark_green";
};

// Componente de botón de Login (icono del monito y la palabra)
const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    //el className de button es un string dinamico
    <button
      className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />} 
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
