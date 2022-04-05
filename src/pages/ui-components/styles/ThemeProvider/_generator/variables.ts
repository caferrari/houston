import { HoustonFontSizes, HoustonFontWeight, HoustonLineHeights, IHoustonTheme } from '../../types';

const fontSizes = {
  'xx-small': 10,
  'x-small': 12,
  small: 14,
  normal: 15,
  default: 16,
  medium: 20,
  large: 24,
  'x-large': 32,
  'xx-large': 40
};

const lineHeights = {
  compact: 1.2,
  normal: 1.5,
  comfortable: 1.8
};

const fontWeight = {
  light: 300,
  regular: 400,
  semibold: 600,
  bold: 700
};

const colors = {
  background: {
    paper: '#fff',
    default: '#F9FAFB'
  },
  common: {
    black: '#000',
    white: '#fff'
  },
  error: {
    light: '#FDD9D7',
    main: '#F44336',
    dark: '#B8160A',
    contrastText: '#fff'
  },
  grey: {
    50: '#fafafa',
    100: '#F9FAFB',
    200: '#ECEFF1',
    300: '#B0BEC5',
    400: '#78909C',
    500: '#546E7A',
    600: '#37474F',
    700: '#373737',
    800: '#272727',
    900: '#1E1E1E',
    A100: '#1E1E1E',
    A200: '#1E1E1E',
    A400: '#1E1E1E',
    A700: '#1E1E1E'
  },
  warning: {
    main: '#FFCA28',
    dark: '#E5AD00',
    light: '#FFF4D4',
    contrastText: '#37474F'
  },
  primary: {
    light: '#9EB5D9',
    main: '#0D47A1',
    dark: '#072D83',
    contrastText: '#fff'
  },
  secondary: {
    light: '#ECEFF1',
    main: '#78909C',
    dark: '#37474F',
    contrastText: '#fff'
  },
  info: {
    light: '#CDEBFA',
    main: '#039BE5',
    dark: '#0277B0',
    contrastText: '#fff'
  },
  success: {
    light: '#D2EBD3',
    main: '#4caf50',
    dark: '#388e3c',
    contrastText: '#fff'
  },
  text: {
    disabled: '#B0BEC5',
    hint: '#B0BEC5',
    primary: '#37474F',
    secondary: '#102027'
  }
};

function hexToRgb(hex: string) {
  return hex
    .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1)
    .match(/.{2}/g)
    .map(v => parseInt(v, 16))
    .join(', ');
}

const defaultThemeVariables: Partial<IHoustonTheme> = {
  fontFamily: 'Open Sans, "Helvetica Neue", Arial, sans-serif',
  radius: (unit = 1) => 4 * unit,
  spacing: (unit = 4) => 4 * unit,
  textSize: (size: HoustonFontSizes = 'normal') => fontSizes[size],
  lineHeight: (size: HoustonLineHeights = 'normal') => lineHeights[size],
  fontWeight: (size: HoustonFontWeight = 'regular') => fontWeight[size],
  colors,
  hexToRgb
};

export default defaultThemeVariables;
