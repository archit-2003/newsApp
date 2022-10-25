import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {
  let[value, setValue] = useState("");

  const options = {
    method: 'GET',
    url: 'https://odds.p.rapidapi.com/v4/sports',
    params: {all: 'true'},
    headers: {
      'X-RapidAPI-Key': '66ab260e63msh955f36df64f117ap1e20c9jsn5743cdd05bfc',
      'X-RapidAPI-Host': 'odds.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
    let data=response.data.map((a)=>{return (        <div className="p-10">  

    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{a.title}</div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{a.group}</span>
      </div>
        <p className="text-gra  y-700 text-base">
          {a.description}
        </p>
      </div>
    </div>
  </div>)})
    console.log(data);
    setValue(data);
    
  }).catch(function (error) {
    console.error(error);
  });

  return (
    <div className="App">
      <Navbar />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {value ? value : <h1 className="font-bold text-center text-xl mb-2">Daily limit exceeded.</h1>}
      </div> 

 

</div>



  );
}

export default App;
