const lighten = (color: string, amount: number) => {
  // change alpha from 1 to 0.8 of color
  const [r, g, b, a] = color
    .replace(/[^\d,]/g, '')
    .split(',')
    .map((c) => parseInt(c, 10))
  return `rgba(${r}, ${g}, ${b}, ${a * amount})`
};

export { lighten }