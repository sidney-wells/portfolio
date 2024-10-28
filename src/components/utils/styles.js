// Useless file for now

const buttonColors = {
  primary: 'white',
  secondary: 'black'
}

const backgroundColors = {
  secondary: 'white',
  primary: 'black'
}

const sizes = {
  small: 12,
  medium: 16,
  large: 24,
  xlarge: 48
}

const BlueButton = {
  color: 'blue',
  fontSize: 72
}

const RedButton = {
  ...buttonColors,
  ...backgroundColors,
  padding: 50,
  fontSize: 72
}

return { BlueButton, RedButton, sizes, buttonColors, backgroundColors };
