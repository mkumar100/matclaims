import React from "react";
import { Routes, Route, useRoutes, BrowserRouter } from "react-router-dom";
import ClaimPreQualification from "./pages/1ClaimPreQualification/1ClaimPreQualification";
import IncidentInfo from "./pages/2IncidentInfo/2IncidentInfo";
import ServiceOptions from "./pages/3ServiceOptions/3ServiceOptions";
import ServiceFul from "./pages/4ServiceFulfillment/4ServiceFul";
import Summary from "./pages/5Summary/5Summary";
import Claimnumber from "./pages/6Claimnumber/6Claimnumber";
import RaisedButtonExampleSimple from "./components/RaisedButton";
import SimpleCard from "./components/Card";
import Navbar from "./components/navbar";
//import SimpleMediaCard from "./components/Card";
//{/* <ClaimPreQualification /> */}
// function App() {
//   return (
//     <div>
//       <Navbar/>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ClaimPreQualification />} />
        <Route path="/incidentinfo" element={<IncidentInfo />} />
        <Route path="/svcoptions" element={<ServiceOptions />} />
        <Route path="/svcful" element={<ServiceFul />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/claim" element={<Claimnumber />} />
        <Route path="/card" element={<SimpleCard />} />
      </Routes>
    </div>
  );
}

export default App;
