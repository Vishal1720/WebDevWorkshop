import React,{useState} from 'react'
import Header from './Header'

const Account = () => {
  const usedat=[{
    "id":121,
    "name":"Vishal",
    "email":"vishal198shetty@gmail.com",
    "age":21,
    "grade":"I MCA",
    "address":"belinjale"
}
,
{
    "id":122,
    "name":"Chirag",
    "email":"ck@gmail.com",
    "age":21,
    "grade":"I MCA",
    "address":"shirva"
}
,
{
    "id":123,
    "name":"Aneesh",
    "email":"aneesh@gmail.com",
    "age":21,
    "grade":"I MCA",
    "address":"Udupi"
}
,
{
    "id":124,
    "name":"Vishwambar",
    "email":"vishwa@gmail.com",
    "age":21,
    "grade":"I MCA",
    "address":"Udupi"
},
{
  "id":125,
    "name":"Dheeraj",
    "email":"dheeraj@gmail.com",
    "age":21,
    "grade":"I MCA",
    "address":"Brahmavara"
}]
 const [list, setlist] = useState(usedat)

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
        min-width:100px;
        text-align:center;
        }

        .inp{
        padding:10px;
        margin:6px;
        
        }
        `}
      </style>
      <Header/>
        <h2 style={{fontSize:55+'px'}} >Account Page</h2>
   <form style={{textAlign:'center',width:20+'%',margin:'auto',display:'flex',flexDirection:'column',padding:4+'px',border:2+'px solid black',}} >
    <input className='inp' type="number" placeholder="Enter Id" name="id" required></input>
    <input className='inp' type="text" placeholder="Enter Name" name="name" required></input>
    <input className='inp' type="email" placeholder="Enter Email" name="email" required></input>
    <input className='inp' type="number" placeholder="Enter Age" name="age" required></input>
    <input className='inp' type="text" placeholder="Enter Grade" name="grade" required></input>
    <input className='inp' type="text" placeholder="Enter Address" name="address" required></input>
    <button type="submit" >Submit</button>
   </form>
   <table>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Age</th>
      <th>Grade</th>
      <th>Address</th>
    </tr>
   {list.map((data)=>(
<tr>
  <td>{data.id}</td>
  <td>{data.name}</td>
  <td>{data.email}</td>
  <td>{data.age}</td>
  <td>{data.grade}</td>
  <td>{data.address}</td>
  </tr>
   ))}
   </table>
    </div>
  )
}

export default Account