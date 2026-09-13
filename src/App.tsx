import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { SmoothScroll } from "./motion/SmoothScroll";
import { CaseStudy } from "./pages/CaseStudy";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";

export function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/about" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  );
}
