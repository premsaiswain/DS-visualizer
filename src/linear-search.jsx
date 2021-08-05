/**
 * Linear search -: 
 * Linear search, also called sequential or simple search algorithm,
 *  is the most basic search algorithm. Given a data structure, for example an array,
 *  we search for an item by looking at all the elements, until we find it.
 * 
 */

/**
 * Bugs to be fixed -
 * - does not show color if searched the same color again and again
 * - nothing is displayed when element is not found
 */
import React, {useState} from "react"
import { motion } from "framer-motion"


function Box() {
    const arrr=[1,2,3,4,5,6,7,8,9,10,11,12];
    const [work,setWork] = useState(false);
    const [item,setitem] =useState(0);
    const [arr,setArr]=useState(arrr);
    const [ansbox,setAnsbox]=useState(0);
    const [ans,setAns]=useState(false);
    const [isFirstRun,setIsfirstrun]= useState(true)
    const [redgreen,setRedGreen] = useState(true);
    const [linear_or_binary , setLb]=useState(true);
    const [trgr,setTrgr] = useState(0);
 // Effects for Linear search
    React.useEffect(()=>{
        if(isFirstRun){
            setIsfirstrun(false);
            return;
        }
        else{
        setTimeout(()=>{
        setAns(true);
        const ans=document.getElementById(ansbox);
        ans.style.backgroundColor="green"
        console.log("I am found");
        },1000*ansbox) }
    },[ansbox])
    
   //Effects for binary search
       React.useEffect(()=>{
             if(isFirstRun){
                 setIsfirstrun(false);
                 return;
             }
             else{
                 setTimeout(()=>{
                  setAns(true);
                  console.log("i am on")
                  const ans=document.getElementById(trgr);
                  ans.style.backgroundColor="green"
                 },1000 * trgr)
             }  
       },[trgr])


 // function to be exectued on click
 
    const finditem=()=>{
        setRedGreen(true);
        let val=0;
        if(linear_or_binary){
             //Linear search algo
            for (let i=0; i<arr.length;i++) {
            if(arr[i] == item){
                setRedGreen(false);
                setAnsbox(i);
                break;
            }
           task(i);
        setWork(false);
     
         } }
         else{
           //binary search algo
        let start=0, end=arr.length-1;
          
    // Iterate while start not meets end
      while (start<=end){
        // Find the mid index
        let mid=Math.floor((start + end)/2);
        // If element is present at mid, return True
        if (arr[mid]== item){
            setTrgr(mid);
            console.log("I am found"); 
            break;     
        } 
        // Else look in left or right half accordingly
       else if (arr[mid] < item) 
             start = mid + 1;
        else
             end = mid - 1;
        btask(val++,mid);
        setWork(false);     
    }
        }
     
     
// a setTimeout function to make the binary search loop slow to visulaize the colors
function btask(i,mid){  
    setTimeout(function () {
        setWork(false);
        const ele = document.getElementById(mid);
        ele.style.backgroundColor = "red";
    }, 1000 * i);
}        
// a setTimeout function to make the loop slow to visulaize the colors  
function task(i) { 
  setTimeout(function(){
        setWork(false);
        const ele=document.getElementById(i);
        ele.style.backgroundColor="red";
        }, 1000 * i);
}
}
  //box-container is the main box in which the elements of the array are stored/displayed
  //Array is the box for the elements which gets repeated according to the elents in the array
    return (
        <div className="box-container">
            <div className="Array">
                 {
                     arr.map((ele,index)=>{
                     return <motion.div className="elements"
                     id={index}
                     animate={{
                        rotate:360,
                        backgroundColor:work?"white":"",
                     }}
                     transition={{
                       type:"spring",
                       stiffness:90,
                       damping:60
                     }}
                      key={index}>{ele}</motion.div>   
                     })
                 }
            </div>
            <div className="ans">
            {ans? !redgreen?<h1 className="ans_found">The element was found in the index {ansbox}</h1>:
            <h1 className="ans_notfound">The element was not found</h1>:""}
            </div>
            {/**a input tag to insert a search element 
            // and a button to perform the operation
            */}
            <div className="search-tags">
                <input type="number" value={item} className="input-tag" onChange={(e)=>setitem(e.target.value)}></input>
                <button className="btn" onClick={()=> finditem()}>Search</button>
            </div>
            <div className="Selectors">
               <label for="Linear">Linear-search</label>
               <input type="radio" id="Linear" value="Linear-search" onChange={()=>setLb(true)} name="search" checked></input>
               <label for="Binary">Binary-search</label>
               <input type="radio" id="Binary" value="Binary-search" onChange={()=>setLb(false)} name="search"></input>
            </div>
            {/** button to reset the grids 
            // it basically just use the useState hooks to set the states to default
            */}
            <div className="Down-tag">
               <button className="btn btn-reset" onClick={()=>{
                setWork(true);
                setAns(false);
                setitem(0);
             }}>Reset</button>
            </div>
           
        </div>
    )
}

export default Box

