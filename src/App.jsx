import { useEffect, useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components";

  export default function App() {
  
    return (
        <BrowserRouter>
        <div> <Navbar />  </div>
        </BrowserRouter>
        
    );
};