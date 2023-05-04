import { Context,CarsProvider } from "./context/Context";
import Home from "./components/Home";



function App() {
  return (


      <CarsProvider>
          <Home></Home>
      </CarsProvider>


  )
}

export default App;
