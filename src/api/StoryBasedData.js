import GSheetReader from "g-sheets-api";

const options = {
  apiKey: process.env.REACT_APP_GOOGLESHEETAPI,
  sheetId: "1q0gdTTfZnGJuieaCY3DdHPaVOPJq1Qg35zlfPMGjy8s",
  sheetNumber: 1,
  sheetName: "Sheet1", // if sheetName is supplied, this will take precedence over sheetNumber
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return new Promise((resolve, reject) => {
    const data = [];
    GSheetReader(
      options,
      (results) => {
        results.map((item, index) => {
          item.options = item?.options?.split("\\");
          item?.options?.map((x, index) => {
            x = x.split("@");
            const obj = {
              option: x[0],
              goToQuestionSceneID: Number(x[1]),
              point: Number(x[2]),
            };
            item.options[index] = obj;
            return "";
          });
          data.push(item);
          return data;
        });
        resolve(data);
      },
      (error) => {
        reject(error);
      }
    );
  });
}
