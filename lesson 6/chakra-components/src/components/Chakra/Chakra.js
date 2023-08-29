import { ChakraProvider, Button } from "@chakra-ui/react";

export default function Chakra() {
  return (
    <ChakraProvider>
      <Button
        isLoading
        loadingText="Submiting"
        colorScheme="whatsapp"
        size="lg"
      >
        Hello
      </Button>
    </ChakraProvider>
  );
}
