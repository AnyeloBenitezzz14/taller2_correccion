import { BrowserRouter, Routes, Route } from "react-router-dom";

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