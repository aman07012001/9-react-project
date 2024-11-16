import { useState } from "react";

import "./App.css";
import Accordian from "./components/Accordian";
import Randomcolor from "./components/Randomcolor";
import Starrating from "./components/Starrating";
import ImageSlider from "./components/ImageSlider";
import Loadmore from "./components/Loadmore";
import Treeview from "./components/treeview/Treeview";
import GenerateQrcode from "./components/Qrcode";
import ScrollIndicator from "./components/Scrollindicator";
import Modal from "./components/Modal";
import Searchapi from "./components/Searchapi/Index";
import Tictac from "./components/Tictac";
import ThemeProvider from "./components/ThemeProvider";
import TestuseOutsideClick from "./components/useOutsideclick";
import ScrolltoTop from "./components/ScrolltoTop";
import Weather from "./components/Weather";

function App() {
  
  return (<>
    <ThemeProvider>
     {
      "hii"
     }
    </ThemeProvider>

    <Weather />
    </>

  );
}

export default App;
