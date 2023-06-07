import axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css';
import Table from '../components/Table';
import { Class} from '../service/data'
const getAPI = "https://script.google.com/macros/s/AKfycbyteuFObqDWsuT1a_AycBLUMzEVB0aYFz9GvE6X8kAdvZWHL0mMElfUpc7-q9SlRg6u0A/exec";
const postAPI = "https://script.google.com/macros/s/AKfycbw2fSBOVHkSikMIzjUBzBXyfC70Yt-TTqc_6yEHCjB5Ebk2-5ms_amXhwypSIezlsMf6g/exec";
function Birthday() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const classChangeHandler = (e) =>{
    setLoading(true);
    if(e.target.value === 'Others'){
      axios.get(getAPI+`?id=0`).then(
        (res)=>{
          setData(res.data.data);
          setLoading(false);
        }
      )
    }else{
      axios.get(getAPI+`?id=${e.target.value}`).then(
        (res)=>{
          setData(res.data.data);
          setLoading(false);
        }
      )
    }
  }

  const updateUser = (e) =>{
    e.preventDefault();
    console.log(e.target[1].value);

    axios.post(postAPI,{
      'Id' : e.target[0].value,
      'Name' : `${e.target[1].value}`,
      'House Name' : `${e.target[2].value}`,
      'DOB' : `${e.target[3].value}`
    }).then(
      (res)=>{
        console.log(res);
      }
    )

  }

  useEffect(() => {
    axios.get(getAPI+`?id=1`).then(
      (res)=>{
        setData(res.data.data);
        setLoading(false);
      }
    )
  }, [])
  

  return (
    <div className="App">
      <Table data={data} Class={Class} classChangeHandler={classChangeHandler} loading={loading} updateUser={updateUser}/>
    </div>
  );
}

export default Birthday;
