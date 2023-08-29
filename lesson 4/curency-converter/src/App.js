import "./App.css";
import Converter from "./components/Converter/Converter";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Converter />
      </div>
    </ChakraProvider>
  );
}

export default App;
