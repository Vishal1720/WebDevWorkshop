import React,{useState} from 'react'
import Header from './Header'
import axios from "axios";
const Account = () => {
  const usedat=[]
  const url="http://localhost:9080/api/students";
 const [list, setlist] = useState(usedat)
 const [sty, setsty] = useState(true)
 const [upid,setuid]=useState(-1)
 const [seeUpdate,setseeUpdate]=useState(false);
 const [selectedstudent,setselectedstudent]=useState({
"id":"",
"first_name":"",
"last_name":"",
"email":"",
"age":"",
"grade":"",
"address":""

 }
 )
 const[style1,setstyle1]=useState({display:'none',textAlign:'center',width:20+'%',margin:'auto',flexDirection:'column',padding:4+'px',border:2+'px solid black'})
 function changestyle()
 {
if (sty)
{
setsty(false)
setstyle1({display:'none',position:'relative',textAlign:'center',width:20+'%',margin:'auto',flexDirection:'column',padding:4+'px',border:2+'px solid black'})
}
else{
  setsty(true)
  setstyle1({display:'flex',position:'relative',textAlign:'center',width:20+'%',margin:'auto',flexDirection:'column',padding:4+'px',border:2+'px solid black'})
}

 }
 const delStud=async (id) =>{
if(window.confirm("You want to delete this?"))
{
  await axios.delete(`http://localhost:9080/api/students/${id}`)
  .then(()=>{
    console.log("Deleted");
    fetchStudents();
    }).catch((err)=>{
  console.log("Error");
    })
  } 
  }

  const addnow= (dat) =>{
    fetchStudents();
    axios.post(url,dat) .then((response) => {
      fetchStudents();
      console.log("Student added:", response.data);
      alert("Student added successfully!");
      
  })
  .catch((error) => {
      console.error("Error adding student:", error);
      alert("Failed to add student.");
  });
  
     }

function submitnow(e){

    e.preventDefault();
    const form=e.target;
    const namev=form.elements.name.value;
    const emailv=form.elements.email.value;
    const agev=form.elements.age.value;
    const gradev=form.elements.grade.value;
    const addressv=form.elements.address.value;
    const newdata={"first_name":namev,"last_name":'empty',"email":emailv,"age":agev,"grade":gradev,"address":addressv}
      addnow(newdata);
    e.target.reset();
  changestyle();
    setlist([...list,newdata])
}
const fetchStudents = async (idn) => {
  try {
   
      const response = await axios.get("http://localhost:9080/api/students/");
      setlist(response.data);
  } catch (err) {
      console.log("error fetching")
  } 
     
  
};
const makenewdata=(id)=>{
  const newdata=list.filter((item)=>item.id==id);
  setselectedstudent(newdata[0])
}



const updatenow =async (e)=>{

e.preventDefault();
const form=e.target;
const idv=form.elements.id.value;
    const namev=form.elements.name.value;
    const emailv=form.elements.email.value;
    const agev=form.elements.age.value;
    const gradev=form.elements.grade.value;
    const addressv=form.elements.address.value;
    const newdata={"first_name":namev,"last_name":'empty',"email":emailv,"age":agev,"grade":gradev,"address":addressv}
    axios.put(`http://localhost:9080/api/students/${idv}`,newdata).then(()=>{
      alert("Updated Sucessfully")
    }).catch((err)=>{
      alert("Error Bantu")
    })
    fetchStudents();

}

const updateStyle={
  display:seeUpdate?"flex":'none',
  flexDirection:"row",
  padding:"10px",
  border:"3px solid white"
}

 const seeUpdateForm=()=>{
  setseeUpdate(true)
 }

 const hideUpdateForm=()=>{
  setseeUpdate(false)
 }
        
      
fetchStudents();
    return (

    <div> 
      
      <style>
        {`
        
        table{
        margin:auto}
        table,td,tr,th{
        border:1px solid black;
        border-collapse:collapse;
        }
        tr,td,th{
        padding:15px;
        border:1px solid white;
        background-color:#645986;
        color:white;
        text-shadow:1.2px 1.2px 1px black;
        min-width:100px;
        text-align:center;
        }

        .inp{
        padding:10px;
        margin:6px;
        
        }
        td button{
        background-color:#8FE388;
        color:white;
        padding:10px;
        font-size:15px;
        font-weight:bold;
        text-shadow:1.2px 1.2px 1px black;
        }
        `}
      </style>
      <Header/>
      

        <h2 style={{fontSize:55+'px'}} >Account Page</h2>
   <form onSubmit={submitnow} style={style1} >
    <h3>Add New User</h3>
    <input className='inp' type="text" placeholder="Enter Name" name="name" required></input>
    <input className='inp' type="email" placeholder="Enter Email" name="email" required></input>
    <input className='inp' type="number" placeholder="Enter Age" name="age" required></input>
    <input className='inp' type="text" placeholder="Enter Grade" name="grade" required></input>
    <input className='inp' type="text" placeholder="Enter Address" name="address" required></input>
    <button type="submit"   >Submit</button>
   </form>
   <form  onSubmit={updatenow} style={updateStyle}>
   
    <h3 style={{color:'white',lineHeight:60+'px',textShadow:'1px 1px black'}}>Update User</h3>
    <input className='inp' type="number" placeholder="Enter Id" name="id" readOnly required value={selectedstudent.id} ></input>
    <input className='inp' type="text" placeholder="Enter Name" name="name" required value={selectedstudent.first_name} onChange={(e) => setselectedstudent({ ...selectedstudent, first_name: e.target.value })}></input>
    <input className='inp' type="email" placeholder="Enter Email" name="email" required value={selectedstudent.email} onChange={(e) => setselectedstudent({ ...selectedstudent, email: e.target.value })}></input>
    <input className='inp' type="number" placeholder="Enter Age" name="age" required value={selectedstudent.age} onChange={(e) => setselectedstudent({ ...selectedstudent, age: e.target.value })}></input>
    <input className='inp' type="text" placeholder="Enter Grade" name="grade" required value={selectedstudent.grade} onChange={(e) => setselectedstudent({ ...selectedstudent, grade: e.target.value })}></input>
    <input className='inp' type="text" placeholder="Enter Address" name="address" required value={selectedstudent.address} onChange={(e) => setselectedstudent({ ...selectedstudent, email: e.address })}></input>
    <input type="submit"  style={{width:84+'px',height:45+'px',margin:5+'px'}} value="Submit"></input>
    <div onClick={hideUpdateForm} style={{backgroundColor:'red',marginTop:10+'px',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',width:'35px',height:'35px',fontSize:'20px',color:'white',marginLeft:30+'px',cursor: 'pointer',}} >X</div>
   </form>
   <table>
   <button onClick={changestyle} style={{padding:9+'px',width:100+'%',backgroundColor:'blue',color:'white',fontSize:17+'px'}}>Add</button>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Age</th>
      <th>Grade</th>
      <th>Address</th>
      <th>Delete</th>
      <th>Update</th>
    </tr>
   {list.map((data)=>(
<tr>
  <td>{data.id}</td>
  <td>{data.first_name}</td>
  <td>{data.email}</td>
  <td>{data.age}</td>
  <td>{data.grade}</td>
  <td>{data.address}</td>
  <td><button onClick={()=>{delStud(data.id)}}>Delete</button></td>
  <td><button  onClick={()=>{seeUpdateForm();makenewdata(data.id)}}>Update</button></td>
  </tr>
   ))}
   </table>
    </div>
  )
}

export default Account