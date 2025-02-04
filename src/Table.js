import React from 'react'
import Header from './Header'
const Table = () => {
  return (
    <div>
        <style>
            {`
            tr,td,th,table{
            padding:10px;
            border:1px solid black;
            border-collapse:collapse;
            }
            table{
            margin:auto;}
            `}
        </style>
<Header/>
<table  >
        
        <thead>
            <td></td>
            <td>Monday</td>
            <td>Tuesday</td>
            <td>Wednesday</td>
            <td>Thursday</td>
            <td>Friday</td>
    </thead>
            <tr>
                <td>1</td>
                <td>Maths</td>
            <td>OS</td>
            <td>ADA</td>
            <td>OOPS</td>
            <td>Python</td>
            </tr>

        <tr>
            <td>2</td>
            <td>OOPS</td>
            <td>OS</td>
            <td>Maths</td>
            <td>ADA</td>
            <td>OOP</td>

        </tr>
        <tr ><td colspan="6" ><center>Break</center></td></tr>
        <tr>
            <td>3</td>
            <td>Python Lab</td>
            <td>ADA Lab</td>
            <td>Maths</td>
            <td>ADA</td>
            <td>Python</td>
        </tr>
        <tr>
            <td>  4 </td>
            <td>Python Lab</td>
            <td>ADA Lab</td>
            <td>Maths</td>
            <td>ADA</td>
            <td>Python</td>
        </tr>
        <tr>
            <td>5</td>
            <td>OS</td>
            <td>OS</td>
            <td>Maths</td>
            <td>ADA</td>
            <td>Python</td>
        </tr>
    </table>
    </div>
  )
}

export default Table