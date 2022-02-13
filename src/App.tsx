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
  Image,
} from "@chakra-ui/react";
import QRCode from "react-qr-code";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import logo1 from "./logo.png";
import logo2 from "./logo.png";
import logo3 from "./logo.png";

const images = [logo1, logo2, logo3, logo1];

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Wrap>
            {images.map((image) => {
              return (
                <WrapItem>
                  <Image src={image} boxSize="sm" objectFit="cover" />
                </WrapItem>
              );
            })}
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
