const XLSX = require('xlsx');
const path = require('path');

const filePath = path.join(__dirname, 'cat_name_link_locale.xlsx');

const workbook = XLSX.readFile(filePath);

const sheetName = workbook.SheetNames[0];
const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });

function convertToDesiredFormat(data) {
  const result = {};

  data.forEach(row => {
    const plentyid = row[0];
    const urlParts = row[1].split('/');
    const lastPartIndex = urlParts.length - 1;
    const url = lastPartIndex >= 0 ? (urlParts[lastPartIndex] || urlParts[lastPartIndex - 1]) : '';

    const name = row[2];
    const locale = row[3];

    if (!result[plentyid]) {
      result[plentyid] = [];
    }

    result[plentyid].push([locale, `/${url}`, name]);

  });

  return result;
}

const formattedData = convertToDesiredFormat(excelData);

console.log(formattedData);
