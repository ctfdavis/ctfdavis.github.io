import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import SidebarBlanket from "./Components/SidebarBlanket";
import { AppProvider } from "./Components/AppContext"

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Main />
        <Nav />
        <SidebarBlanket />
        <Sidebar />
      </div>
    </AppProvider>
  );
}

export default App;
