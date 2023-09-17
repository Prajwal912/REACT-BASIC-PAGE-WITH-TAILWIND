import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Message from "./pages/Message";
import Analytics from "./pages/Analytics";
import FileManager from "./pages/FileManager";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar";
const App = () => {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
            <Route path="/message" element={<Message />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/filemanager" element={<FileManager />} />
            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<> Not Found </>} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
};

export default App;
