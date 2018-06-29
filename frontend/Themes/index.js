const blue = '#1890ff'
const darkBlack = '#222222'

export const theme = {
  primaryColor: blue,
  primaryColorLight: adjustColor(blue, 20),
  fontColor: darkBlack,
  fontColorLight: adjustColor(darkBlack, 40),
  borderColor: '#e8e8e8',
  borderRadius: '2px',
}

function adjustColor (color, amount) {
  var usePound = false

  if (color[0] == '#') {
    color = color.slice(1)
    usePound = true
  }

  var num = parseInt(color, 16)

  var r = (num >> 16) + amount

  if (r > 255) r = 255
  else if (r < 0) r = 0

  var b = ((num >> 8) & 0x00ff) + amount

  if (b > 255) b = 255
  else if (b < 0) b = 0

  var g = (num & 0x0000ff) + amount

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}
