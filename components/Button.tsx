// TypeScript: Definición de tipos para las props del componente
type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string; // "?" = opcional
  variant: "btn_dark_green";
};

// Componente de botón
const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return <button type="button"></button>;
};

export default Button;
