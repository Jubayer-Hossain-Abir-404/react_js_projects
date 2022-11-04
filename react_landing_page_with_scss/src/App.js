import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Free from "./components/Free/Free";
import Home from "./components/Home/Home";
import Like from "./components/Like/Like";
import Navbar from "./components/Navbar/Navbar";
import Release from "./components/Release/Release";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SignUp from "./components/SignUp/SignUp";
import SuperRare from "./components/SuperRare/SuperRare";
import "./scss/index.scss"


function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Home />
      <Free />
      <Clients/>
      <SuperRare/>
      <Release/>
      <Like/>
      <SignUp/>
      <Footer />
    </div>
  );
}

export default App;
