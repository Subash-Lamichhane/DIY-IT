import flagsmith from "flagsmith";
import { FlagsmithProvider } from 'flagsmith/react';
import HomePage from "./pages/homePage/homePage";
import { useFlags, useFlagsmith } from 'flagsmith/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GeneratePage from "./pages/generatePage/GeneratePage";
import AboutPage from "./pages/aboutPage.jsx/AboutPage";
import Maintainance from "./pages/Maintainance";
function App() {
    // const {maintainFlags} = useFlags(['maintenance']); // only causes re-render if specified flag values / traits change
    // console.log(maintainFlags)
    // console.log(maintainFlags.enabled)
    // const maintain = flags.maintenance.enabled;

  return (
    <>

      <FlagsmithProvider
        options={{
          environmentID: import.meta.env.VITE_FLAGSMITH_KEY,
        }}
        flagsmith={flagsmith}>
        {/* {
          maintainFlags.enabled ? <Maintainance/>
          : 
        } */}
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/generate" element={<GeneratePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            {/* <Route exact path="/maintainance" element={<Maintainance/>} /> */}
          </Routes>
        </Router>

      </FlagsmithProvider>
    </>
  );
}

export default App
