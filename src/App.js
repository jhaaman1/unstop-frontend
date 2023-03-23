import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar/Navbar';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Box boxShadow={"base"} >
        <Navbar />
      </Box>
      <AllRoutes/>
    </div>
  );
}

export default App;
