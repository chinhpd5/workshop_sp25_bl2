import { useRoutes } from "react-router";
import Client from "./layouts/Client";
import Home from "./pages/Home";
import About from "./pages/About";
import Checkout from "./pages/Checkout";


function App() {
  const element = useRoutes([
    { path: "", element: <Client/>, children: [
       {
        path: "", element : <Home/>
       },
       {
        path: 'about',element: <About/>
       },
       {
        path: 'checkout', element: <Checkout/>
       }
      ]
    }
  ]);
  
  return (
    <div>
      {element}
    </div>
  );
}

export default App;
