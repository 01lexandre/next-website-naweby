import { mode } from '@chakra-ui/theme-tools'
const themeShema = {
  colors: {
    background: '#eaebef',
    text: '#2d3748',
    dark_primary: '#3524cf',
    secundary: '#f6602e',
    dark_secundary: '#ff4406',

    white: '#eaebef',

    primary: {
      "50": "#ECECF9",
      "100": "#C9C9EE",
      "200": "#A6A6E3",
      "300": "#8383D8",
      "400": "#6566ff",
      "500": "#3D3DC2",
      "600": "#30309C",
      "700": "#242475",
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
        backgroundColor: mode('#eaebef', 'gray.800')(props),
      },
    }),
  },
}

export default themeShema
