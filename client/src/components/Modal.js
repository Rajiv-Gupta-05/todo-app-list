import {useState} from 'react'
import { useCookies } from 'react-cookie'

const Modal = ({mode, setShowModal, getData, task}) => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const editMode = mode === 'edit' ? true : false

  const [data, setData] = useState({
    user_email: editMode ? task.user_email : cookies.Email,
    title: editMode ? task.title : '',
    progress: editMode ? task.progress : 50,
    date: editMode ? task.date : new Date()
  })

  const postData = async(e) => {
    e.preventDefault()
    try{
      if(!data.title.trim()){
        alert('Task should not be empty!')
        return
      }
      const response = await fetch('http://localhost:8000/todos/',{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      if(response.status === 200){
        console.log('WORKED');
        setShowModal(false)
        getData()
      }
    }catch(err){
      console.error(err);
    }
  }

  const editData = async(e)=>{
    e.preventDefault()
    try {
     const response =  await fetch(`http://localhost:8000/todos/${task.id}`,{
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      if(response.status === 200){
        setShowModal(false)
        getData()
      }
    } catch (err) {
      console.error(err);
    }
  }

  const handleChange =(e)=>{
    const {name, value} = e.target

    setData((prevData) => ({
      ...prevData,
      [name] : value
    }))
  }

    return (
      <div className='overlay'>
        <div className='modal'>
          <div className='form-title-container'>
            <h3>Let's {mode} your task</h3>
            <button onClick={()=> setShowModal(false)}>X</button>
          </div>
          <form onSubmit={editMode ? editData : postData}>
          <label htmlFor="title">Your task goes here</label>
            <input 
            required
            maxLength={50}
            placeholder="Your task goes here"
            name="title"
            value={data.title}
            onChange={handleChange}
            /> 
            <br></br>
            <label htmlFor="range">Drag to select your current progress</label>
            <input 
            type="range"
            id="range"
            min="0"
            max="100"
            name="progress"
            value={data.progress}
            onChange={handleChange}/>
            <input className={mode} type='submit' onClick={editMode ? editData : postData} />
          </form>
        </div>
      </div>
    )
  }
  
  export default Modal;
  