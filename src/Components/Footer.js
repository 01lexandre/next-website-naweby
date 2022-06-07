import {
  Box,
  Container,
  Grid,
  GridItem,
  IconButton,
  Image,
  Tag,
  TagLabel,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import logoPrincipal from "../assets/logo-princ.png";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

export default function Footer() {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Box as={'footer'} textAlign={"center"} pt={5} pb={5} bg={useColorModeValue('#F6F5FA', 'gray.900')}>
      <Container maxW='container.lg'>
        <Grid templateColumns='repeat(12, 1fr)' gap={6}>
          <GridItem colSpan={[12, 6, 6]} textAlign={'left'}>
            © {new Date().getFullYear()} Direitos Reservados
          </GridItem>
          <GridItem colSpan={[12, 6, 6]} textAlign={'right'}>
            <Tag size="lg" borderRadius="full" ml={2}>
              <TagLabel>
                <Box display={"flex"} alignItems={"center"}>
                  Feito com
                  <Box ml={2} display={"flex"} alignItems={"center"}>
                    <Image
                      width={'20px'}
                      height={'20px'}
                      src={'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDU3Ljk0NyA1Ny45NDciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU3Ljk0NyA1Ny45NDc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNFNjRDM0M7IiBkPSJNMjguOTQ3LDU2LjQ4NmMxNS42ODUtMTEuMjc3LDIzLjUzMi0yMS41OTIsMjcuMjIyLTI5LjQ2YzQuMzExLTkuMTkzLDAuNTYxLTIwLjU4OS04Ljg0NS0yNC40MTMNCgkJQzM2LjI2OC0xLjg4LDI4Ljk0Nyw4LjQ4NiwyOC45NDcsOC40ODZTMjEuNjc4LTEuOTA3LDEwLjYyMywyLjU4OEMxLjIxNyw2LjQxMi0yLjUzMywxNy44MDgsMS43NzgsMjcuMDAxDQoJCUM1LjQ2OCwzNC44NjgsMTMuMjYyLDQ1LjIxLDI4Ljk0Nyw1Ni40ODZ6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=='}
                      alt='Amor'
                    />
                  </Box>
                </Box>
              </TagLabel>
            </Tag>
            {
              colorMode === 'light'
                ? (
                  <IconButton onClick={toggleColorMode} ml={2} size='sm' aria-label='mode color' icon={<MoonIcon/>}/>
                )
                : (<IconButton onClick={toggleColorMode} ml={2} size='sm' aria-label='mode color' icon={<SunIcon/>}/>)
            }
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}
