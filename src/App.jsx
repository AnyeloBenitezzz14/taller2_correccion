import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./features/layout/components/Header";
import Content from "./features/layout/components/Content";
import Props from "./features/layout/components/Props";
import Footer from "./features/layout/components/Footer";

function App() {
  return (
    <BrowserRouter basename="/taller2_correccion/">
      
      <Header />

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/props" element={<Props />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;