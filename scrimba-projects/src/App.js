import react from "react";
import "./App.css";
import Info from "./components/Info";
import Interest from "./components/Intrest";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}
export default App;
