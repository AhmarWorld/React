import "./App.css";
import {
  ChakraProvider,
  AbsoluteCenter,
  Flex,
  Text,
  Heading,
  Button,
  Skeleton,
  Box,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("AhmarWorld");
  const [isLoaded, setIsLoaded] = useState(true);

  const getMotivationText = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then(({ slip }) => {
        setText(slip.advice);
        setTimeout(() => {
          setIsLoaded(false);
        }, 1200);
      });
  };

  useEffect(() => {
    getMotivationText();
  }, []);

  return (
    <ChakraProvider>
      <div className="App">
        <Heading color={"#E25E3E"} textAlign={"center"}>
          Motivation Quote Generator
        </Heading>
        <AbsoluteCenter borderRadius={6} p={5} bg={"#FF9B50"} axis={"both"}>
          <Flex
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            textAlign="center"
            w={538}
            h={212}
          >
            <Box width="100%" height="60%">
              {isLoaded ? (
                <Skeleton startColor="#FF9B50" endColor="#E25E3E" height="100%">
                  {text}
                </Skeleton>
              ) : (
                <Text fontSize="2xl" color={"#C63D2F"} as="cite">
                  {text}
                </Text>
              )}
            </Box>
            <Button
              variant="solid"
              border="1px"
              colorScheme="C63D2F"
              onClick={() => {
                setIsLoaded(true);
                getMotivationText();
              }}
            >
              Generate Motivation
            </Button>
          </Flex>
        </AbsoluteCenter>
      </div>
    </ChakraProvider>
  );
}

export default App;
