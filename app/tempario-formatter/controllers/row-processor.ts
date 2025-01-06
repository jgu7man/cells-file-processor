import {ActivityTimeReference} from '../types/ActivityTimeReference';
import {TemparioRow} from '../types/TemparioRow';
import {sanitizeString} from '../utils/string-utils';

export function processRow(
  row: TemparioRow,
  rowIndex: number,
  referenceCount: number,
): ActivityTimeReference[] {
  const {['OPERACIÓN MÉCANICA']: mechanicalActivity, ...referenceAndTimes} =
    row;

  if (!mechanicalActivity) {
    console.warn(`⚠ 'OPERACIÓN MÉCANICA' in row ${rowIndex + 2} is empty.`);
    return [];
  }

  const timeEntries = Object.entries(referenceAndTimes);
  if (isRowEmpty(timeEntries, referenceCount)) {
    console.warn(`❕ Row ${rowIndex + 2} has no time values.`);
    return [];
  }

  return timeEntries
    .filter(([, time]) => time !== null)
    .map(([ref, time]) => ({
      reference: sanitizeString(ref),
      activity: sanitizeString(mechanicalActivity),
      time: time as string | number,
    }));
}

/**
 * Determines if a row is considered empty based on the number of null values.
 *
 * @param entries - An array of key-value pairs representing the row entries.
 * @param nullValueLimit - The threshold of null values to consider the row as empty.
 * @returns `true` if the number of null values is greater than or equal to the nullValueLimit, otherwise `false`.
 */
function isRowEmpty(entries: [string, any][], nullValueLimit: number): boolean {
  const nullValuesCount = entries.filter(([, value]) => value === null).length;
  return nullValuesCount >= nullValueLimit;
}
