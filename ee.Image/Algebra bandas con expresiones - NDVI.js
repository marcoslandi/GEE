/**
 * Calcula el NDVI (Normalized Difference Vegetation Index) a partir
 * de una imagen Landsat o Sentinel que contenga las bandas RED y NIR.
 *
 * El cálculo se realiza mediante álgebra de bandas utilizando
 * la función `image.expression()`, que permite evaluar una expresión
 * matemática definida como cadena de texto.
 *
 * Fórmula del NDVI:
 *     NDVI = (NIR - RED) / (NIR + RED)
 *
 * Donde:
 *   - NIR = banda del infrarrojo cercano
 *   - RED = banda del rojo
 *
 * @param {ee.Image} image 
 *    Imagen de entrada que contiene las bandas necesarias para el cálculo.
 *    En este ejemplo se usan:
 *      - 'SR_B4' → banda RED
 *      - 'SR_B5' → banda NIR
 *
 * @returns {ee.Image}
 *    Nueva imagen con una banda adicional denominada 'ndvi',
 *    que contiene los valores del índice NDVI.
 *
 * @example
 * var ndvi = image.expression(
 *   // Expresión algebraica
 *   '(NIR - RED) / (NIR + RED)',
 *
 *   // Diccionario que asigna nombres de variables a bandas
 *   {
 *     'RED': image.select('SR_B4'),
 *     'NIR': image.select('SR_B5')
 *   }
 * ).rename('ndvi');
 *
 * Map.addLayer(ndvi, {min: -1, max: 1, palette: ['blue','white','green']}, 'NDVI');
 */
var ndvi = image.expression(
  // Cadena string definiendo el cálculo del NDVI
  '(NIR - RED) / (NIR + RED)',

  // Diccionario que asigna variables usadas en la expresión
  {
    'RED': image.select('SR_B4'),  // banda roja
    'NIR': image.select('SR_B5')   // banda infrarrojo cercano
  }
).rename('ndvi');
