import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import Professionals from "./routes/Professionals";

import PediaSuit from "./routes/PediaSuit";
import Bobath from "./routes/Bobath";
import TerapiaOcupacional from "./routes/TerapiaOcupacional";
import EstimulacaoVisual from "./routes/EstimulacaoVisual";
import Psicomotricidade from "./routes/Psicomotricidade";

import Sobre from "./routes/Sobre";
import Contato from "./routes/Contato";
import FonoaudiologiaBobath from "./routes/FonoaudiologiaBobath";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "profissionais",
    element: <Professionals />,
  },
  {
    path: "especialidades/fonoaudiologiabobath",
    element: <FonoaudiologiaBobath />,
  },
  {
    path: "especialidades/pediasuit",
    element: <PediaSuit />,
  },
  {
    path: "especialidades/bobath",
    element: <Bobath />,
  },
  {
    path: "especialidades/terapiaocupacional",
    element: <TerapiaOcupacional />,
  },
  {
    path: "especialidades/estimulacaovisual",
    element: <EstimulacaoVisual />,
  },
  {
    path: "especialidades/psicomotricidade",
    element: <Psicomotricidade />,
  },
  {
    path: "sobre",
    element: <Sobre />,
  },
  {
    path: "contato",
    element: <Contato />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
