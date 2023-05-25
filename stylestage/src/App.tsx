import Homepage from "./components/homepage/Homepage";
import About from "./components/about/About";
import Guidelines from "./components/guidelines/Guidelines";
import Contribute from "./components/contribute/Contribute";
import Files from "./components/files/Files";
import Allstyles from "./components/allstyles/Allstyles";
import Resources from "./components/resources/Resources";
import Footer from "./components/footer/Footer";
import Currently from "./components/currently/Currently";

function App() {
  return (
    <div>
      <Homepage />
      <About />
      <Guidelines />
      <Contribute />
      <Files />
      <Allstyles />
      <Footer/>
      <Resources />
      <Currently />
    </div>
  );
}

export default App;
