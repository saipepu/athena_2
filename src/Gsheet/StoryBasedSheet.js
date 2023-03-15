import GSheetReader from 'g-sheets-api'

const options = {
  apiKey: process.env.REACT_APP_GOOGLESHEETAPI,
  sheetId: '1q0gdTTfZnGJuieaCY3DdHPaVOPJq1Qg35zlfPMGjy8s',
  sheetNumber: 1,
  sheetName: 'Sheet1', // if sheetName is supplied, this will take precedence over sheetNumber
}
const data = [];
export default GSheetReader(options, results => {
  console.log(results);
  results.map((item, index) => {
    console.log(item);
    item.option = item?.option?.split("\\");
    item?.option?.map((x, index) => {
      x = x.split('@');
      console.log(x);
      const obj = {
        option: x[0],
        goto: x[1],
        point: x[2],
      }
      item.option[index] = obj;
      return "";
    })
    data.push(item);
    return data;
  })
  console.log(data);
}, error => {
  console.log(error);
})
// export default data;

  // returnAllResults: false,
  // filter: {
  //   'Col 1': 'Jan'
  // },
  // filterOptions: {
  //   operator: 'or',
  //   matching: 'loose'
  // }