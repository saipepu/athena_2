import React from "react";
import * as XLSX from "xlsx";

const Excel = () => {
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReaders = new FileReader();
      fileReaders.readAsArrayBuffer(file);

      fileReaders.onload = (e) => {
        const bufferArray = e.target.result;

        const workBook = XLSX.read(bufferArray, { type: "buffer" });
        const workSheetName = workBook.SheetNames[0];
        const workSheet = workBook.Sheets[workSheetName];

        const data = XLSX.utils.sheet_to_json(workSheet);

        resolve(data);
      };

      fileReaders.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((data) => {
        localStorage.setItem('data', JSON.stringify(data));
        console.log(data);
    })
  };

  return (
    <div>
      <h1>Excel</h1>
      <input
        style={{ display: "initial" }}
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      ></input>
    </div>
  );
};

export default Excel;
