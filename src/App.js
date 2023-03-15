import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Training from './Pages/Training';
import WaterRising from './Games/WaterRising/WaterRising';
import StoryBased from './Games/StoryBased/StoryBased';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
// import google from 'gapi-client';
// import StoryBasedSheet from './Gsheet/StoryBasedSheet'
// import GoogleSheetGo from './api/Registeration';
// import google from './api/Registeration'

function App() {
  // console.log(google);

  // const data = StoryBasedSheet;

  // const GoogleSheetGo = async () => {
  //   const auth = new google.auth.GoogleAuth({
  //     keyFile: "../Config/Credentials.json",
  //     scopes: "https://www.googleapis.com/auth/spreadsheets"
  //   })
    
  //   // create client instance for auth
  //   const client = await auth.getClient();
    
  //   // instance of google sheets api
  //   const googleSheets = google.sheets({version: "v4", auth: client});
  
  //   const spreadsheetId = "13836flBpe-X9yCCrS2-5zjIN1QhAbBXB2wV2KETTuLM";
  //   // Get metadata about spreadsheet
  //   const metaData = await googleSheets.spreadsheets.get({
  //     auth, 
  //     spreadsheetId,
  //   })
  //   console.log(metaData.data);
  //   // get rows
  //   const getRows = await googleSheets.spreadsheets.values.get({
  //     auth,
  //     spreadsheetId,
  //     range: "Sheet1"
  //   })
  //   // write row(s) to spreadsheets
  //   googleSheets.spreadsheets.values.append({
  //     auth,
  //     spreadsheetId,
  //     range: "Sheet1!A:B",
  //     valueInputOption: "USER_ENTERED",
  //     resource: {
  //       values: [
  //         ["key", "valuesl;sdjf;loaesjrf"],
  //         ["key2", "value2"],
  //       ]
  //     }
  //   })
  //   console.log(getRows.data, 27)
  // }
  // GoogleSheetGo();
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/training" element={<Training />} />
          <Route path="/water-rising" element={<WaterRising />} />
          <Route path="/story-based" element={<StoryBased />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
