import React from "react";
import Home from "./components/Home";
import LogOut from "./components/LogOut";
import CreateAccount from "./components/CreateAccount";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/explore" element={<Explore />}></Route>
        <Route path="/podcast" element={<Podcast />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
        <Route path="/library" element={<Library />}></Route>
        <Route path="/vibez" element={<TraficVibez />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/gbedu" element={<SoftGbedu />}></Route>
        <Route path="/playlist" element={<AddPlaylist />}></Route> */}
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/logout" element={<LogOut />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
