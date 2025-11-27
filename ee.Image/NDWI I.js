/**
 * NDWI (McFeeters, 1996)
 * Índice diseñado para detectar cuerpos de agua superficiales.
 *
 * Fórmula:
 *     NDWI = (GREEN - NIR) / (GREEN + NIR)
 *
 * @param {ee.Image} image Imagen con bandas GREEN y NIR.
 * @returns {ee.Image} Imagen con banda 'NDWI'.
 */
var NDWI = image.expression(
  '(GREEN - NIR) / (GREEN + NIR)',
  {
    'GREEN': image.select('B3'),   // Banda verde (Sentinel-2)
    'NIR':   image.select('B8')    // Infrarrojo cercano
  }
).rename('NDWI');
