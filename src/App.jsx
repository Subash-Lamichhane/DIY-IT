import flagsmith from "flagsmith";
import { FlagsmithProvider } from 'flagsmith/react';
import HomePage from "./pages/homePage/homePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GeneratePage from "./pages/generatePage/GeneratePage";
import AboutPage from "./pages/aboutPage.jsx/AboutPage";
import Maintainance from "./pages/Maintainance";
function App() {
  return (
    <>

      <FlagsmithProvider
        options={{
          environmentID: 'mSx3R7KYMA5E9T6on8p4jv',
        }}
        flagsmith={flagsmith}>

        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/generate" element={<GeneratePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/maintainance" element={<Maintainance/>} />
          </Routes>
        </Router>

      </FlagsmithProvider>
    </>
  );
}

export default App
