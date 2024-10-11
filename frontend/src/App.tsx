import { Feed } from "./components/Feed";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="w-full h-full flex min-h-[100vh] md:flex-row flex-col">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
