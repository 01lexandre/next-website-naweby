import { mode } from '@chakra-ui/theme-tools'
const themeShema = {
  colors: {
    background: '#fff',
    text: '#2d3748',
    dark_primary: '#3524cf',
    dark_secundary: '#ff4406',
    white: '#eaebef',
    secundary: {
      "50": "#FFFAF0",
      "100": "#FEEBC8",
      "200": "#FBD38D",
      "300": "#ee7f5b",
      "400": "#f6602e",
      "500": "#f6602e",
      "600": "#d34a1b",
      "700": "#ad3b14",
      "800": "#932c09",
      "900": "#5b210d"
    },
    primary: {
      "50": "#ECECF9",
      "100": "#C9C9EE",
      "200": "#A6A6E3",
      "300": "#8383D8",
      "400": "#6566ff",
      "500": "#3D3DC2",
      "600": "#30309C",
      "700": "#2D2B6E",
      "800": "#18184E",
      "900": "#0C0C27"
    },
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
  // fontPatterns: "400 17px 'Inter', sans-serif !important",
  config: {
    initialColorMode: 'light',
  },

  styles: {
    global: (props) => ({
      body: {
        color: mode('#2d3748', 'whiteAlpha.900')(props),
        backgroundColor: mode('#fff', 'gray.800')(props),
      },
    }),
  },
}

export default themeShema
