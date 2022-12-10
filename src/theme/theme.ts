import { ColorModeContext, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        Color: "gray.800"
      }
    }
  }
});

export default theme;
