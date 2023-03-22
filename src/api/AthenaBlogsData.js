import GSheetReader from "g-sheets-api";

const options = {
  apiKey: process.env.REACT_APP_GOOGLESHEETAPI,
  sheetId: "1I8UZTzcJieCoTagrQ-jy3Qye0Lt4HPA-dblFMpoy-es",
  sheetNumber: 1,
  sheetName: "Sheet1", // if sheetName is supplied, this will take precedence over sheetNumber
};
const data = [];
GSheetReader(
  options,
  (results) => {
    results.map((item, index) => {
      console.log(item);
      data.push(item);
      return ""
    });
    // console.log(data);
  },
  (error) => {
    console.log(error);
  }
);
export default data;

// returnAllResults: false,
// filter: {
//   'Col 1': 'Jan'
// },
// filterOptions: {
//   operator: 'or',
//   matching: 'loose'
// }
