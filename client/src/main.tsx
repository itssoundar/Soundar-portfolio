import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { warmSiteMedia, eagerLoadLazyImages } from "@/lib/warmMedia";

warmSiteMedia();
eagerLoadLazyImages();
createRoot(document.getElementById("root")!).render(<App />);
