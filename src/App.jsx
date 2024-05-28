import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import { Box, Flex } from '@chakra-ui/react';
import Topbar from './Components/Topbar';
import Footer from './Components/Footer';

function App() {
  window.scroll(0,0)
  return (
    <Box >
     <Flex  bg={"white"} w={"100%"} zIndex={1000} mb={10} position={"fixed"} flexDir={"column"}>
      <Topbar/>
     <Navbar />
     </Flex>
      <AllRoutes/>
      <Footer />
    </Box>
  );
}

export default App;
