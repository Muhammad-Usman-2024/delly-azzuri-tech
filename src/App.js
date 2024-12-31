import DealsOfTheDay from "./components/DealsOfTheDay";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InquiriesSection from "./components/InquiriesSection";
import Navbar from "./components/Navbar";
import NearBy from "./components/NearBy";
import NotificationBar from "./components/NotificationBar";

function App() {
  return (
    <div>
      <div className="hidden lg:block">
        <NotificationBar />
      </div>

      <Navbar />
      <HeroSection />
      <NearBy />
      <DealsOfTheDay />
      <DownloadSection />
      <InquiriesSection />
      <Footer />
    </div>
  );
}

export default App;
