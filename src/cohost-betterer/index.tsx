import './meta.js?userscript-metadata';
import { ReactNode } from "react";
import { createRoot } from "react-dom/client";

console.log("CoHost Betterer v1!")

import TopBar from "./components/top-bar";
const topBarRoot = createRoot(document.getElementsByTagName("body")[0]);
topBarRoot.render(<TopBar /> as ReactNode);
