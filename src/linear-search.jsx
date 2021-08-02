import React from 'react'
import { motion } from "framer-motion"


function Box() {
    const arrr=[1,2,3,4,5,6,7,8,9,10,11,12];
    const [work,setWork] = React.useState(false);
    const [item,setitem] =React.useState(0);
    const [arr,setArr]=React.useState(arrr);
    const [ansbox,setAnsbox]=React.useState(0);
    const [ans,setAns]=React.useState(false);
    const [isFirstRun,setIsfirstrun]= React.useState(true)


    React.useEffect(()=>{
        if(isFirstRun){
            setIsfirstrun(false);
            console.log("HI")
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



    const finditem=()=>{
        for (let i=0; i<arr.length;i++) {
            if(arr[i] == item){
               setAnsbox(i);
                break;
            }
           task(i);
        setWork(false);
         }
  
function task(i) { 
  setTimeout(function(){
        setWork(false);
        const ele=document.getElementById(i);
        ele.style.backgroundColor="red";
        }, 1000 * i);
}
    }
  
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
                       stiffness:60,
                       damping:90
                     }}
                      key={index}>{ele}</motion.div>   
                     })
                 }
            </div>
            <div className="ans">
            { ans?<h1>The element was found in the index {ansbox}</h1>:"" }
            </div>
            <div className="search-tags">
                <input type="number" value={item} className="input-tag" onChange={(e)=>setitem(e.target.value)}></input>
                <button className="btn" onClick={()=> finditem()}>Search</button>
            </div>
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

