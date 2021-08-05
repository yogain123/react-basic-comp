// https://codesandbox.io/          react app
import React,{useState}  from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [radioName, setRadioName] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [learn, setLearn] = useState("angular");

  const handleCheckBox = (event)=>{
    if(event.target.checked){
      setHobbies([...hobbies, event.target.value])
    }else{
      setHobbies(hobbies.filter(item=>item!==event.target.value))
    }
  }
  return (
    <div className="App">
    {JSON.stringify({name,radioName,hobbies, learn}, null,2)} <br />
    <br/>
      <input value={name} type="text" onChange={(event)=>setName(event.target.value)} />
      <div>
      radio1:<input checked={radioName==="radio1"} value="radio1" onChange={event=>setRadioName(event.target.value)} type="radio" name="name" />
      radio2:<input checked={radioName==="radio2"} value="radio2" type="radio" name="name" onChange={event=>setRadioName(event.target.value)} />
      radio3:<input checked={radioName==="radio3"} value="radio3" type="radio" name="name" onChange={event=>setRadioName(event.target.value)} />
      </div>
      <br/>
      <div>
      check 1: <input checked={hobbies.includes("cricket")} value="cricket" type="checkbox" onChange={handleCheckBox} />
      check 2: <input checked={hobbies.includes("football")} value="football" type="checkbox" onChange={handleCheckBox} />
      check 3: <input checked={hobbies.includes("hockey")} value="hockey" type="checkbox" onChange={handleCheckBox} />
      </div>
      <br/>
      <div>
        <select value={learn} onChange={event=>setLearn(event.target.value)}>
          <option value="react">react</option>
          <option value="angular">angular</option>
          <option value="vue">vue 3</option>
        </select>
      </div>
    </div>
  );
}
