# **`cells-file-processor`**

---

#### **Descripción**

`cells-file-processor` es una herramienta escrita en TypeScript para procesar datos de archivos CSV y XLSX. Actualmente está diseñada específicamente para manejar información relacionada con "tempario", como referencias de tiempo por actividad.

Este proyecto permite leer, transformar y exportar datos procesados, asegurando que las filas vacías o incompletas sean descartadas.

---

### **Características**

- 📝 **Lectura de Archivos**: Soporte para CSV y XLSX.
- 🔄 **Procesamiento de Datos**: Filtrado de filas vacías o incompletas.
- 📁 **Escritura de Resultados**: Exporta resultados procesados a un archivo CSV.

---

### **Estructura del Proyecto**

```plaintext
project/
│
├── src/
│   ├── main.ts                # Punto de entrada principal del procesamiento
│   │
│   ├── fileReader.ts          # Funciones para leer archivos CSV/XLSX
│   ├── fileWriter.ts          # Funciones para escribir archivos CSV
│   ├── temparioProcessor.ts   # Lógica para procesar filas y extraer datos
│   ├── logger.ts              # Función centralizada para logging
│   │
│   ├── types/                 # Tipos TypeScript específicos
│   │   ├── ActivityTimeReference.ts
│   │   ├── TemparioRow.ts
│
├── resource/                  # Archivos de entrada y salida
│   ├── tempario.csv           # Archivo de entrada
│   ├── tempario-result.csv    # Archivo de salida
│
├── package.json               # Dependencias y scripts
├── tsconfig.json              # Configuración de TypeScript
└── README.md                  # Documentación del proyecto
```

---

### **Requisitos Previos**

1. **Node.js** (v16 o superior)
2. **TypeScript** (v4.x o superior)
3. **nodemon** instalado de manera global:
   ```bash
   npm install -g nodemon
   ```

---

### **Instalación**

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/cells-file-processor.git
   cd cells-file-processor
   ```

2. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

3. Coloca el archivo `tempario.csv` de entrada en el directorio `resource/`.

---

### **Uso**

#### **Ejecución del Proyecto**

Para ejecutar el procesador de "tempario" con nodemon, utiliza el siguiente script:

```bash
npm run tempario:serve
```

#### **Qué hace?**

1. Inicia el archivo principal `main.ts`.
2. Detecta automáticamente cambios en los archivos y reinicia la ejecución gracias a `nodemon`.

---

### **Flujo de Procesamiento**

1. **Lectura de Archivo**:

   - El archivo `tempario.csv` se carga y transforma en filas de datos.
   - Las celdas vacías se reemplazan por `null` para un manejo más uniforme.

2. **Procesamiento**:

   - Se valida que cada fila tenga un valor para la columna "OPERACIÓN MÉCANICA".
   - Se descartan filas sin tiempos asignados.
   - Se normalizan las cadenas eliminando saltos de línea y espacios adicionales.

3. **Exportación de Resultados**:
   - Los datos procesados se escriben en el archivo `tempario-result.csv` en formato CSV.

---

### **Configuración**

#### **Archivos**

- **Archivo de Entrada**: Ubicado en `resource/tempario.csv`.
- **Archivo de Salida**: Se genera automáticamente como `resource/tempario-result.csv`.

---

### **Ejemplo**

#### **Archivo de Entrada (`tempario.csv`)**

| OPERACIÓN MÉCANICA | REF_1 | REF_2 | REF_3 |
| ------------------ | ----- | ----- | ----- |
| Actividad A        | 12    | 15    |       |
| Actividad B        |       |       |       |
| Actividad C        | 20    |       | 30    |

#### **Archivo de Salida (`tempario-result.csv`)**

```csv
reference,activity,time
REF_1,Actividad A,12
REF_2,Actividad A,15
REF_1,Actividad C,20
REF_3,Actividad C,30
```

---

### **Archivos Principales**

1. **`main.ts`**:
   - Orquesta todo el flujo: lectura, procesamiento y escritura.
2. **`fileReader.ts`**:
   - Contiene funciones para cargar datos desde un archivo CSV o XLSX.
3. **`fileWriter.ts`**:
   - Escribe los datos procesados en un archivo CSV.
4. **`temparioProcessor.ts`**:
   - Lógica para transformar y filtrar los datos.
5. **`logger.ts`**:
   - Gestión centralizada de logs.

---

### **Contribuciones**

¡Cualquier ayuda es bienvenida! Si deseas contribuir, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza los cambios y crea un pull request.

---

### **Licencia**

Este proyecto está bajo la Licencia MIT.
