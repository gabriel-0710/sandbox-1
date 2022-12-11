import { extendTheme } from '@chakra-ui/react';

export const themeChakra = extendTheme({
  styles: {
    global: {
      body: {
        fontSize: '16px',
        fontFamily: '"Varela Round", sans-serif',
        backgroundColor: '#363740'

      },

      p: {
        marginTop: '0!important',
      },
    },
  },

  textStyles: {},

  colors: {},

  components: {},
});
