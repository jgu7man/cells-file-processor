import {processRow} from './controllers/row-processor';
import {ActivityTimeReference} from './types/ActivityTimeReference';
import {readXlsxFile, writeCsvFile} from './utils/file-utils';

// Constants for file paths
const INPUT_FILE = 'resource/tempario.csv';
const OUTPUT_FILE = 'resource/tempario-result.csv';

// Main function to process the file
function processTemparioFile(): void {
  const rows = readXlsxFile(INPUT_FILE);
  if (!rows.length) {
    console.error('❌ No rows found in the file.');
    return;
  }

  console.log(`📝 Total rows to parse: ${rows.length}`);

  const firstRow = rows[0];
  const referenceCount = Object.keys(firstRow).length - 1; // Exclude "OPERACIÓN MÉCANICA" column

  console.log(`📝 Total moto references: ${referenceCount}`);

  const activityTimes: ActivityTimeReference[] = [];
  activityTimes.push({
    reference: 'reference',
    activity: 'activity',
    time: 'time',
  });

  rows.forEach((row, index) => {
    const processedRows = processRow(row, index, referenceCount);
    activityTimes.push(...processedRows);
  });

  const csvContent = activityTimes
    .map(({reference, activity, time}) => `${reference},${activity},${time}`)
    .join('\n');

  writeCsvFile(OUTPUT_FILE, csvContent);
  console.log(`✅ Printed ${activityTimes.length} records`);
}

// Execute the script
processTemparioFile();
