import GSheetReader from "g-sheets-api";

const options = {
  apiKey: process.env.REACT_APP_GOOGLESHEETAPI,
  sheetId: "1ydjnm6UyE5pm5-onpFT-w3KdBSNzxU-fsj6KAvtb9mA",
  sheetNumber: 1,
  sheetName: "Sheet1", // if sheetName is supplied, this will take precedence over sheetNumber
};
const data = [];

// Getting waterRising Game Content from Google Sheet
GSheetReader(
  options,
  (results) => {
    results.map((item, index) => {
      item.options = item.options.split(",");
      data.push(item);
      return "";
    });
  },
  (error) => {
    console.log(error);
  }
);
export default data;
