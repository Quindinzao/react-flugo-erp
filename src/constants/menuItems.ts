// Assets
import dashboard from "../assets/dashboard.svg";
import user from "../assets/user.svg";
import about from "../assets/about.svg";
import logout from "../assets/logout.svg";

export const MENU_ITEMS = [
  { id: 1, text: "Painel", path: "/dashboard", image: dashboard },
  { id: 2, text: "Colaboradores", path: "/employees", image: user },
  { id: 3, text: "Sobre", path: "/about", image: about },
  { id: 4, text: "Sair", path: "/logout", image: logout },
];