// Función para aplicar máscara de nube
function maskS2Clouds(image):
    /**
 * Aplica una máscara de calidad a imágenes Sentinel-2 (L2A/SR) usando la banda SCL
 * (Scene Classification Layer). 
 *
 * La función identifica los píxeles clasificados como:
 *   - 3  → Sombra de nubes
 *   - 7  → Nubes (probabilidad baja)
 *   - 8  → Nubes (probabilidad media)
 *   - 9  → Nubes (probabilidad alta)
 *   - 10 → Cirros
 *   - 11 → Nieve o hielo
 *
 * Todos estos píxeles se consideran “inválidos” para análisis espectrales y 
 * por lo tanto son eliminados del procesamiento.
 *
 * La máscara final (mask) conserva únicamente los píxeles que NO pertenecen 
 * a ninguna de las categorías anteriores.
 *
 * @param {ee.Image} image 
 *    Imagen Sentinel-2 en formato Surface Reflectance (COPERNICUS/S2_SR o S2_SR_HARMONIZED)
 *    que debe contener la banda de clasificación 'SCL'. 
 *
 * @returns {ee.Image}
 *    Imagen original con una máscara aplicada (updateMask). 
 *    Los píxeles de nubes, sombra y nieve quedan “enmascarados” (NoData),
 *    mientras que los píxeles válidos quedan disponibles para análisis posteriores.
 *
 * @example
 * var s2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
 *             .filterDate('2020-01-01','2020-01-31')
 *             .map(maskS2Clouds);
 *
 * Map.addLayer(s2.median(), {bands: ['B4','B3','B2'], min:0, max:3000}, 'RGB sin nubes');
 */
    
    scl = image.select('SCL')
    cloud = (
        scl.eq(3)  # sombra
        .Or(scl.eq(7))  # nube baja
        .Or(scl.eq(8))  # nube media
        .Or(scl.eq(9))  # nube alta
        .Or(scl.eq(10)) # cirrus
        .Or(scl.eq(11)) # nieve
    )
    mask = cloud.Not()   # invertimos
    return image.updateMask(mask)