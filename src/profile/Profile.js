import React from 'react'
import Header from '../Header'
import './style.css'
import img1 from './img.png'
const Profile = () => {
  return (
    <>
     <Header/>
<div className="card">
        <div className="heading">
           
        <h1>Vishal Shetty</h1>
         </div><div className="content" style={{textAlign: "center"}}><img src={img1} alt="pfp"/></div>
         <div className="content">
            
            BCA graduate (GPA: 9.31) with a demonstrated ability to solve problems under pressure (coding competition wins & inter-college achievements. Proficient in HTML, CSS, JS, PHP, React.js (basic), C++. Eager to contribute to a dynamic IT team.
         </div>
    </div>

   
        
<div >
    <div className="heading">
    <h2>Education</h2>
</div>
    <div className="content">
        <h3>Bachelor of Computer Applications</h3>
        <ul>
            <li>St Mary’s College, Shirva</li>
            <li>CGPA:9.25</li>
            <li>Year of Graduation:2024</li>
        </ul>
        
    </div>
</div>

           
<div >
    <div className="heading">
    <h2>Social handles</h2>
</div>
    <div className="content" style={{textAlign: "center"}}>
       <a href="https://github.com/Vishal1720">Github</a>
       <a href="https://www.linkedin.com/in/vishalshetty17/">Linkedin</a>
       <a href="https://vishal1720.github.io/portfolio/">Portfolio</a>
    </div>
</div>

    <div>
        <div className="heading">
            <h2>Skills</h2>
             </div>
             <div className="content">
                <ol>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>PHP</li>
            </ol>
            </div>
    </div>

<div>
    <div className="heading">
        <h2>Achievements</h2>
         </div>
         <div className="content">
            <ul>
            <li>Winner of the Coding event at the IT fest (MEDHA-23) in Shree Devi College</li>
            
            <li>Second Prize in Coding event at the IT fest(Razzmatazz-24) in
            Dr NSAM First Grade College, Nitte.</li>
            <li>
            Second Prize in Coding event at the IT fest (Samagra-24) in Sharada College, Thalapady
        </li>
        </ul>
        </div>
</div>
    </>
  )
}

export default Profile