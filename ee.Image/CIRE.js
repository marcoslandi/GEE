/**
 * Chlorophyll Index Red-Edge (CI-RE)
 *
 * Estima contenido de clorofila aprovechando bandas red-edge.
 *
 * Fórmula:
 *     CI_RE = (NIR / RE) - 1
 *
 * @param {ee.Image} image Imagen con bandas B8 (NIR) y B5 (red-edge).
 * @returns {ee.Image} Imagen 'CI_RE'.
 */
var CIRE = image.expression(
  '(NIR / RE) - 1',
  {
    'NIR': image.select('B8'),
    'RE':  image.select('B5')
  }
).rename('CI_RE');
