/**
 * NDWI (Gao, 1996) - Humedad en vegetación
 *
 * Detecta contenido de agua en el mesófilo.
 *
 * Fórmula:
 *     NDWI = (NIR - SWIR) / (NIR + SWIR)
 *
 * @param {ee.Image} image Imagen con bandas NIR y SWIR.
 * @returns {ee.Image} Imagen con banda 'NDWI_GAO'.
 */
var NDWI_GAO = image.expression(
  '(NIR - SWIR) / (NIR + SWIR)',
  {
    'NIR':  image.select('B8'),
    'SWIR': image.select('B11')
  }
).rename('NDWI_GAO');
