# 🌿 Índices de Vegetación en Google Earth Engine  
**Repositorio de funciones, documentación y ejemplos para cálculo de índices espectrales**

Este repositorio contiene un conjunto de funciones y ejemplos en **Google Earth Engine (GEE)** para calcular los principales índices espectrales utilizados en monitoreo ambiental, agricultura, humedales, detección de incendios y calidad de vegetación.

Los scripts utilizan _álgebra de bandas_ mediante `image.expression()` y están documentados con estilo **JavaScript/JSDoc** para facilitar su comprensión y reutilización.

---


Cada archivo contiene una función independiente para calcular un índice específico.

---

# ⭐ Índices incluidos

### Vegetación
- **NDVI** – Normalized Difference Vegetation Index  
- **EVI** – Enhanced Vegetation Index  
- **MSAVI** – Modified Soil Adjusted Vegetation Index  
- **RE-NDVI** – Red-Edge NDVI  
- **CI-RE** – Chlorophyll Index Red-Edge  

### Agua y humedad
- **NDWI (McFeeters)** – Detección de cuerpos de agua  
- **NDWI (Gao)** – Humedad en el mesófilo de la vegetación  

### Fuego
- **NBR** – Normalized Burn Ratio  

---

# 🧪 Ejemplo: Cálculo de NDVI usando álgebra de bandas

Este es un ejemplo completamente documentado utilizando `image.expression()`, ideal para enseñar álgebra espectral en GEE.
