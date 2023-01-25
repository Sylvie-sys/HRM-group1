
import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom"
import "./department.css"
import { AiTwotoneEdit,AiOutlineFileDone, AiOutlineSearch } from "react-icons/ai"
import { MdDeleteForever} from "react-icons/md"
import { IoIosAdd } from "react-icons/io"


export const Department =()=>{
    const inputRef =useRef <HTMLInputElement>(null);

return <div className="DepartContainer">
   <h3>DEPARTMENTS LISTS</h3>
   {/* <Link to="/department">Departments Lists</Link> */}

  



 <form action="" className="inpute" >
       
<input  type="input"  className="icon"><AiOutlineSearch/>Search something</input>

<button className="inpute_submit" type="submit">GO</button>
</form>



        <div className="single_Text">
        <table className="table1">

<tr> <th>#</th> <th>Department Name</th> <th> Department Head</th> <th>Total Employee</th> <th> Action</th></tr>

<tr> <td>01</td> <td>DESIGN TEAM</td> <td> Bayisenge Shailla</td>  <td>7</td>   <td className="icon"><AiTwotoneEdit /><MdDeleteForever/></td>  </tr>

<tr> <td>02</td> <td>BACKEND TEAM</td> <td>.... </td><td>...</td> <td className="icon"><AiTwotoneEdit /><MdDeleteForever/></td></tr>

<tr> <td>03</td> <td>FRONTEND TEAM</td> <td>...</td><td>...</td> <td className="icon"><AiTwotoneEdit /><MdDeleteForever/></td></tr>

</table>

    

        </div>
      <div className="buto">
        
  <button className="icon"><AiTwotoneEdit />Edit</button> 
  <button className="icon"> <IoIosAdd/>Add</button>
  <button>Save</button>  
  </div> 
        </div>

   



}


