import * as fs from 'fs';
import * as XLSX from 'xlsx';
import {TemparioRow} from '../types/TemparioRow';

/**
 * Reads an XLSX file and converts the first sheet into an array of TemparioRow objects.
 *
 * @param filePath - The path to the XLSX file to be read.
 * @returns An array of TemparioRow objects representing the data in the first sheet of the XLSX file.
 */
export function readXlsxFile(filePath: string): TemparioRow[] {
  const workbook = XLSX.readFile(filePath, {type: 'file', codepage: 65001});
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(sheet, {defval: null}) as TemparioRow[];
}

/**
 * Writes the provided data to a CSV file at the specified file path.
 *
 * @param filePath - The path where the CSV file will be written.
 * @param data - The CSV data to be written to the file.
 * @throws Will throw an error if the file cannot be written.
 */
export function writeCsvFile(filePath: string, data: string): void {
  fs.writeFileSync(filePath, data);
}
