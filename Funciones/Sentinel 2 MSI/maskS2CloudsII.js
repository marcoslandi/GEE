// Función para aplicar máscara de nube
function maskS2Clouds(image){
  
  //Selección banda SCL
  var sclBand = image.select('SCL');
  
  // Máscara con datos validos
  var validMask = sclBand.eq(4) // Vegetación
                    .or(sclBand.eq(5)) // Suelo desnudo
                    .or(sclBand.eq(6)); // Agua
  
  return image.updateMask(validMask);