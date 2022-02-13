import * as React from "react";
import {
  ChakraProvider,
  Box,
  Link,
  VStack,
  Grid,
  theme,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import QRCode from "react-qr-code";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Wrap>
            <WrapItem>
              <Logo h="40vmin" pointerEvents="none" />
            </WrapItem>
            <WrapItem>
              <Logo h="40vmin" pointerEvents="none" />
            </WrapItem>
            <WrapItem>
              <Logo h="40vmin" pointerEvents="none" />
            </WrapItem>
          </Wrap>
          <Link
            color="teal.500"
            href="https://raidguild.org"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <QRCode value="https://raidguild.org" />
            Learn more
          </Link>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
