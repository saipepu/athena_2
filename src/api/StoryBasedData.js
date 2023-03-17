import GSheetReader from "g-sheets-api";

const options = {
  apiKey: process.env.REACT_APP_GOOGLESHEETAPI,
  sheetId: "1q0gdTTfZnGJuieaCY3DdHPaVOPJq1Qg35zlfPMGjy8s",
  sheetNumber: 1,
  sheetName: "Sheet1", // if sheetName is supplied, this will take precedence over sheetNumber
};

export default function () {
  return new Promise((resolve, reject) => {
    const data = [];
    GSheetReader(
      options,
      (results) => {
        // console.log(results);
        results.map((item, index) => {
          // console.log(item);
          item.option = item?.option?.split("\\");
          item?.option?.map((x, index) => {
            x = x.split("@");
            // console.log(x);
            const obj = {
              option: x[0],
              goToQuestionSceneID: x[1],
              point: x[2],
            };
            item.option[index] = obj;
            return "";
          });
          data.push(item);
          return data;
        });
        resolve(data);
        console.log(data);
      },
      (error) => {
        reject(error);
        console.log(error);
      }
    );
  });
}