import GSheetReader from 'g-sheets-api'

import * as dotenv from 'dotenv'
dotenv.config()

const options = {
  apiKey: process.env.REACT_APP_GOOGLESHEETAPI,
  sheetId: '1ydjnm6UyE5pm5-onpFT-w3KdBSNzxU-fsj6KAvtb9mA',
  sheetNumber: 1,
  sheetName: 'Sheet1', // if sheetName is supplied, this will take precedence over sheetNumber
}
const data = [];
GSheetReader(options, results => {
  results.map((item, index) => {
    item.options = item.options.split(',');
    data.push(item);
    return "";
  })
  // console.log(data);
}, error => {
  console.log(error);
})
export default data;

  // returnAllResults: false,
  // filter: {
  //   'Col 1': 'Jan'
  // },
  // filterOptions: {
  //   operator: 'or',
  //   matching: 'loose'
  // }
