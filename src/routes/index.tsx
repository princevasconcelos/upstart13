import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';

function Paths() {
  return (
    <Routes location="/">
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Paths;
