import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Stars from "./Components/Stars";
import Sidebar from "./Components/Sidebar";
import SidebarBlanket from "./Components/SidebarBlanket";
import { AppProvider } from "./Components/AppContext"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <AppProvider>
        <div className="App">
          <Main />
          <Stars />
          <Nav />
          <SidebarBlanket />
          <Sidebar />
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
