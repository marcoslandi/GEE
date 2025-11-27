// Función para aplicar máscara de nube
function maskS2Clouds(image){
  /*
  La función selecciona los píxeles de agua, suelo desnudo y
  vegetación mediante la banda SCL.
  
  Los pixeles de las categorías no válidas no se tienen en cuenta
  se eliminan del procesamiento
  */
  
  //Selección banda SCL
  var sclBand = image.select('SCL');
  
  // Máscara con datos validos
  var validMask = sclBand.eq(4) // Vegetación
                    .or(sclBand.eq(5)) // Suelo desnudo
                    .or(sclBand.eq(6)); // Agua
  
  return image.updateMask(validMask);