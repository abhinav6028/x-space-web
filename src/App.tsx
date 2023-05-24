import Divider from '@mui/material/Divider';
import './App.css';
import { ChatBubble } from './components/ChatBubble/ChatBubble';
import { Footer } from './components/Footer/Footer';
import ScrollToTop from './components/Ui/ScrollToTop/ScrollToTop';
import { MobileAppBar } from './NavBar/MobileAppBar';
import { NavBar } from './NavBar/NavBar';
import EnquireNow from './pages/HomePage/EnquireNow';
import { AllRoutes } from './routes/Routes';

function App() {

  return (


    <div>

      <ScrollToTop />

      <NavBar />

      <MobileAppBar />

      <ChatBubble />

      <AllRoutes />

      <Divider />

      <Footer />

    </div>

  );
}

export default App;
