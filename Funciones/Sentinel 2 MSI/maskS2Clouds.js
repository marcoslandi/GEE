// Función para aplicar máscara de nube
function maskS2Clouds(image):
    /*
  La función selecciona los píxeles 
  1) Sombra de nube
  2) baja probabilidad de nube
  3) probabilidad media de nube
  4) alta probabilidad de nube
  5) cirros
  6) nieve
  
  Los pixeles de las categorías no válidas no se tienen en cuenta
  se eliminan del procesamiento
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