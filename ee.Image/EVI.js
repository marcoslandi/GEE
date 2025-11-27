/**
 * EVI (Enhanced Vegetation Index)
 *
 * Fórmula:
 * EVI = 2.5 * (NIR - RED) /
 *       (NIR + 6*RED - 7.5*BLUE + 1)
 *
 * @param {ee.Image} image Imagen con bandas BLUE, RED y NIR.
 * @returns {ee.Image} Imagen 'EVI'.
 */
var EVI = image.expression(
  '2.5 * (NIR - RED) / (NIR + 6 * RED - 7.5 * BLUE + 1)',
  {
    'BLUE': image.select('B2'),
    'RED':  image.select('B4'),
    'NIR':  image.select('B8')
  }
).rename('EVI');
