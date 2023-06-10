
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import MovieDetails from "./pages/MovieDetails";

function App() {

  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
