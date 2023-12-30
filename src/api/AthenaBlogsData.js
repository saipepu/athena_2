import GSheetReader from "g-sheets-api";

const options = {
  apiKey: process.env.REACT_APP_GOOGLESHEETAPI,
  sheetId: "1I8UZTzcJieCoTagrQ-jy3Qye0Lt4HPA-dblFMpoy-es",
  sheetNumber: 1,
  sheetName: "Sheet1", // if sheetName is supplied, this will take precedence over sheetNumber
};
const data = [];

// getting the content data from google sheet
GSheetReader(
  options,
  (results) => {
    results.map((item, index) => {
      data.push(item);
      return ""
    });
  },
  (error) => {
    console.log(error);
  }
);
export default data;