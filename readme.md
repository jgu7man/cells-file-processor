# 📄 Cells File Processor

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://github.com/jgu7man/cells-file-processor)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square&logo=node.js&logoColor=white)](https://github.com/jgu7man/cells-file-processor)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

`cells-file-processor` is a modular TypeScript engine designed to read, process, transform, and export structured data from spreadsheet files in **CSV** and **XLSX** formats. Its primary purpose is to process rows of tabular data to extract information, apply business transformation rules, and export normalized results in structured formats.

---

## ✨ Features

- 📝 **Multi-Format Ingestion:** Native reading support for CSV and XLSX files.
- 🔄 **Custom Business Processing:** Processes data based on specific business rules (such as time-activity reference extraction / *tempario* matrix calculations).
- 📁 **Structured Output:** Exports processed results to clean CSV or JSON files.
- 🛠️ **Modular Architecture:** Easy to scale and maintain with decoupled, reusable core modules.
- 🔍 **Data Validation & Cleaning:** Drops empty/incomplete rows, strips whitespace, and normalizes string encodings.

---

## 🏗️ Project Structure

```plaintext
cells-file-processor/
│
├── src/
│   ├── core/                  # Reusable core modules
│   │   ├── file/              # File reading and writing
│   │   │   ├── fileReader.ts
│   │   │   ├── fileWriter.ts
│   │   │   └── fileUtils.ts
│   │   │
│   │   └── utils/             # Generic utilities
│   │       ├── stringUtils.ts
│   │       └── logger.ts
│   │
│   ├── features/              # Feature-specific processing
│   │   └── tempario/          # "Tempario" matrix processing module
│   │       ├── temparioProcessor.ts
│   │       ├── temparioUtils.ts
│   │       └── temparioService.ts
│   │
│   ├── types/                 # TypeScript type definitions
│   │   ├── ActivityTimeReference.ts
│   │   └── TemparioRow.ts
│   │
│   ├── main.ts                # Main application entry point
│   │
│   └── config/                # Project configuration
│       ├── constants.ts
│       └── environment.ts
│
├── resource/                  # Input and output files
│   ├── tempario.csv           # Sample input
│   └── tempario-result.csv    # Generated output
│
├── tests/                     # Unit & integration tests
│   ├── core/
│   └── features/
│
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

---

## 📋 Prerequisites

- **Node.js** (v16 or higher)
- **TypeScript** (v4.x or higher)
- **nodemon** (optional for dev server):
  ```bash
  npm install -g nodemon
  ```

---

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jgu7man/cells-file-processor.git
   cd cells-file-processor
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Place your input data file (`tempario.csv` or `.xlsx`) in the `resource/` directory.

---

## 💻 Usage

### Main Command
To execute the data processor:
```bash
npm start
# or development mode with nodemon:
npm run tempario:serve
```

### Processing Flow
1. **File Reading:** Loads `resource/tempario.csv` (or XLSX) into raw row structures, replacing empty cells with `null` for consistent downstream handling.
2. **Transformation:** Validates required columns (e.g. "OPERACIÓN MÉCANICA"), discards unassigned time rows, and normalizes string encodings.
3. **Export:** Writes clean, normalized records into `resource/tempario-result.csv`.

---

## ⚙️ Configuration

Global file paths and defaults can be adjusted in `src/config/constants.ts`:

```typescript
export const INPUT_FILE = 'resource/tempario.csv';
export const OUTPUT_FILE = 'resource/tempario-result.csv';
export const DEFAULT_ENCODING = 'utf-8';
```

---

## 📊 Example Transformation

### Input (`tempario.csv`)

| OPERACIÓN MÉCANICA | REF_1 | REF_2 | REF_3 |
| :--- | :--- | :--- | :--- |
| Actividad A | 12 | 15 | |
| Actividad B | | | |
| Actividad C | 20 | | 30 |

### Output (`tempario-result.csv`)

```csv
reference,activity,time
REF_1,Actividad A,12
REF_2,Actividad A,15
REF_1,Actividad C,20
REF_3,Actividad C,30
```

---

## 🧪 Testing

Run unit and integration test suites:
```bash
npm test
```

---

## 📄 License

Distributed under the [MIT License](LICENSE). Created by [Jorge Guzmán (@jgu7man)](https://github.com/jgu7man).
