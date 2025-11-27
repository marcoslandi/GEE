/**
 * MSAVI (Modified Soil-Adjusted Vegetation Index)
 *
 * Minimiza el efecto del brillo del suelo.
 *
 * Fórmula:
 * MSAVI = (2*NIR + 1 - sqrt((2*NIR + 1)^2 - 8*(NIR - RED))) / 2
 *
 * @param {ee.Image} image Imagen con bandas RED y NIR.
 * @returns {ee.Image} Imagen con banda 'MSAVI'.
 */
var MSAVI = image.expression(
  '(2 * NIR + 1 - ((2 * NIR + 1) ** 2 - 8 * (NIR - RED)) ** 0.5) / 2',
  {
    'RED': image.select('B4'),
    'NIR': image.select('B8')
  }
).rename('MSAVI');
