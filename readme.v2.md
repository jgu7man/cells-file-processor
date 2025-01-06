### **`cells-file-processor`**

---

#### **Descripción**

`cells-file-processor` es un proyecto modular en TypeScript que permite leer, procesar y escribir datos desde/para archivos en formatos como CSV y XLSX. Su propósito principal es procesar filas de datos para extraer información, transformarla, y exportar resultados en un formato estructurado.

---

### **Características**

- 📝 **Lectura de Archivos**: Compatible con archivos CSV y XLSX.
- 🔄 **Procesamiento Personalizado**: Procesa datos basados en reglas específicas, como extracción de tiempos de actividades y referencias.
- 📁 **Escritura de Resultados**: Exporta los resultados en formato CSV o JSON.
- 🛠️ **Estructura Modular**: Fácil de escalar y mantener, con módulos reutilizables.
- 🔍 **Validación y Limpieza de Datos**: Elimina valores nulos y normaliza strings.

---

### **Estructura del Proyecto**

```plaintext
project/
│
├── src/
│   ├── core/                  # Módulos reusables
│   │   ├── file/              # Lectura y escritura de archivos
│   │   │   ├── fileReader.ts
│   │   │   ├── fileWriter.ts
│   │   │   ├── fileUtils.ts
│   │   │
│   │   ├── utils/             # Utilidades genéricas
│   │   │   ├── stringUtils.ts
│   │   │   ├── logger.ts
│   │
│   ├── features/              # Funcionalidades específicas
│   │   ├── tempario/          # Procesamiento del módulo "tempario"
│   │   │   ├── temparioProcessor.ts
│   │   │   ├── temparioUtils.ts
│   │   │   ├── temparioService.ts
│   │
│   ├── types/                 # Tipos TypeScript
│   │   ├── ActivityTimeReference.ts
│   │   ├── TemparioRow.ts
│   │
│   ├── main.ts                # Punto de entrada principal
│   │
│   └── config/                # Configuración del proyecto
│       ├── constants.ts
│       ├── environment.ts
│
├── resource/                  # Archivos de entrada/salida
│   ├── tempario.csv
│   ├── tempario-result.csv
│
├── tests/                     # Pruebas
│   ├── core/
│   ├── features/
│
├── package.json               # Dependencias y scripts
├── tsconfig.json              # Configuración de TypeScript
└── README.md                  # Documentación
```

---

### **Requisitos Previos**

- **Node.js** (v16 o superior)
- **TypeScript** (v4.x o superior)

---

### **Instalación**

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/cells-file-processor.git
   cd cells-file-processor
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura los archivos de entrada y salida en `resource/`.

---

### **Uso**

#### **Comando Principal**

Para ejecutar el procesamiento de datos:

```bash
npm start
```

#### **Flujo General**

1. **Lectura de Archivo**:
   - El programa lee un archivo CSV o XLSX ubicado en `resource/tempario.csv`.
2. **Procesamiento**:
   - Extrae actividades, tiempos y referencias según las reglas de negocio.
   - Filtra filas vacías o con datos incompletos.
3. **Escritura de Resultados**:
   - Crea un archivo de salida `tempario-result.csv` con los datos procesados.

---

### **Configuración**

#### **Archivo de Configuración**

Puedes ajustar constantes globales en `src/config/constants.ts`:

```typescript
export const INPUT_FILE = 'resource/tempario.csv';
export const OUTPUT_FILE = 'resource/tempario-result.csv';
export const DEFAULT_ENCODING = 'utf-8';
```

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

### **Tests**

Ejecuta pruebas unitarias e integradas:

```bash
npm test
```

---

### **Futuras Funcionalidades**

- 🌐 **Soporte para otros formatos**: JSON, XML, etc.
- 🚀 **CLI Interactivo**: Selección de archivos y configuración personalizada desde la línea de comandos.
- 📊 **Análisis de Datos**: Generar estadísticas o resúmenes de los datos procesados.
- 🔒 **Validación Avanzada**: Validación personalizada por columnas y tipos.

---

### **Contribuciones**

¡Contribuciones son bienvenidas! Por favor, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu feature:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza un pull request.

---

### **Licencia**

Este proyecto está bajo la Licencia MIT.

---

¡Listo! 🎉
