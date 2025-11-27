/**
 * NBR (Normalized Burn Ratio)
 *
 * Ideal para análisis de incendios y severidad de área quemada.
 *
 * Fórmula:
 *     NBR = (NIR - SWIR2) / (NIR + SWIR2)
 *
 * @param {ee.Image} image Imagen con bandas NIR (B8) y SWIR2 (B12).
 * @returns {ee.Image} Imagen 'NBR'.
 */
var NBR = image.expression(
  '(NIR - SWIR2) / (NIR + SWIR2)',
  {
    'NIR':   image.select('B8'),
    'SWIR2': image.select('B12')
  }
).rename('NBR');
