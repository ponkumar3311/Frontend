import { useState } from "react";
import "./content5.css";
export default function content5(){

    const[form,setform]=useState({
       q1:'',
       q2:'' ,
       q3:[],
       q4:[],
       q5:[]
       

       
    });
    const [showModal,setShowModal] = useState(false);
    const [submission,setSubmission] = useState([]);
    const handleChange=(e)=>{
      setform({...form,[e.target.name]:e.target.value});
    }
    const handleCheckBox=(e)=>{
        const {name,value,checked }=e.target;
        const updated = checked?[...form[name],value]
        :form[name].filter((v)=>v!==value);
        setform({...form,[name]:updated});
    };
    const handlePrevious= (e) =>{
        e.preventDefault();
        setShowModal(true);
    };
    const handleSubmit=()=>{
        setSubmission([...submission,form]);
        setform({q1:'',q3:[]})
        setShowModal(false);
    }
    return(
        <div>
           <form>
            <div>
                <label>Q1</label><br/>
                <label><input type="radio"value='Yes' name='q1' checked={form.q1==='Yes'} onChange={handleChange}/>Q11</label>
                <label><input type="radio"value='No' name='q1' checked={form.q1==='No'} onChange={handleChange}/>Q12</label>
            </div>
            <div>
                <label>Checkbox1</label><br/>
                <label>
                    {['1','2','3'].map(opt=>(
                    <label key={opt}><input type="checkbox"name="q3" value={opt} checked={form.q3.includes(opt)} onChange={handleCheckBox}/>{opt}</label>
                    ))
                    }
                </label>
            </div>
            <button onClick={handlePrevious}>Previous</button>
           </form>
           {showModal&&(
            <div className="modal-overlay">
                <div className="modal-content">
                    <div>
                <label>Q1</label><br/>
                <label><input type="radio"value='Yes' name='q1' checked={form.q1==='Yes'} onChange={handleChange}/>Q11</label>
                <label><input type="radio"value='No' name='q1' checked={form.q1==='No'} onChange={handleChange}/>Q12</label>
            </div>
            <div>
                <label>Checkbox1</label><br/>
                <label>
                    {['1','2','3'].map(opt=>(
                    <label key={opt}><input type="checkbox"name="q3" value={opt} checked={form.q3.includes(opt)} onChange={handleCheckBox}/>{opt}</label>
                    ))
                    }
                </label>
            </div>
            <button onClick={handleSubmit}>Submit</button>
                 
                </div>
            </div>
           )

           }
           {
            submission.length >0 && (
                <div>
                    <table>
                        <thead>
                            <tr >
                                <th>S.no</th>
                                <th>Radio</th>
                                <th>CheckBox</th>
                            </tr>

                        </thead>
                        <tbody>
                            {submission.map((s,i)=>(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{s.q1}</td>
                                    <td>{s.q3}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            )
           }
           </div>
           
    )
}