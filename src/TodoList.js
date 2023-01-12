import React, { useState } from 'react'
import './TodoStyle.css'

function TodoList() {
    const[activity,setActivity] = useState("");

    const [listData, setlistData] = useState([])

    function addActivity(){
        // setlistData([...listData, activity])
        // console.log(listData);

        setlistData((listData)=>{
          const updatedList = [...listData,activity]
          console.log(updatedList)
          setActivity('')
          return updatedList
        })
    }

    function removeActivity(i){
      const updatedListData = listData.filter((elem, id)=>{
        return i!=id;
      }) 
      setlistData(updatedListData)
    }

    function removeAll(){
      setlistData([])
    }
  return (
    <>
        <div className='container'>
            <div className='header'>Todo List</div>
            <div className='input-task'>
              <input type='text' placeholder='Add Activity' value={activity} onChange={(e) => setActivity(e.target.value)}/>
              <button onClick={addActivity}>Add</button>
            </div>
           
            <p className='list-heading'>You'r Task</p>
            {listData!=[] && listData.map((data, i)=>{

              return(
                <>
                  <div key={i}>
                    <div className='wrapped'>
                        <div className='listData'><p>{data}</p></div>
                        <div ><button onClick={() => removeActivity(i)} className='remove'>remove</button></div>
                    </div>
                  </div>
                </>
              )
            })}

            {listData.length>=1 &&  <button onClick={removeAll} className='remove'>Remove All</button>}
           
        </div>
    </>
  )
}

export default TodoList


