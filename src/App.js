
import './App.css';
import { useState } from 'react';

function App() {

  const [student, setStudent] = useState({ name: "", age: "", dob: "", password: "" })
  const [data, setData] = useState(JSON.parse(localStorage.getItem("s")) || [])

  const fontSubmit = (e) => {
    console.log(e.target.name)
    setStudent({ ...student, [e.target.name]: e.target.value })
  }


  const submit = () => {
    setData([...data, student])
    localStorage.setItem("s", JSON.stringify([...data, student]));

  }
  const [search1, setSearch1] = useState("")

  const search = () => {

    // const filteredData = student.filter((item) => { return (item?.userfullname?.toLocaleLowerCase() === searchValue?.toLocaleLowerCase()) });
    // console.log(filteredData);

    //include methods

    const filteredData = data.filter((item) => { return (item?.age?.toLocaleLowerCase().includes(search1?.toLocaleLowerCase())) });
    console.log(filteredData);
    setData([...filteredData])

  }



  return (
    <>
      <div className="h-[950px]  bg-cover p-2.5  flex  flex-col items-center  justify-center " style={{ backgroundImage: "url(https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMjItbWluZC0xNl8xLmpwZw.jpg)" }}>
        <div className="flex flex-col gap-[20px]">

          <div>
            <label htmlFor='name' className="text-xl"> Name:</label>
            <input type="text" name='name' value={student.name} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-blue-500  ml-2 h-12 w-44  bg-transparent" />
          </div>


          <div>
            <label htmlFor='age' className="text-xl"> Age:</label>
            <input type="age" name='age' value={student.age} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-blue-500  ml-2 h-12 w-44  bg-transparent" />
          </div>


          <div>
            <label htmlFor='dob' className="text-xl"> Dob:</label>
            <input type="date" name='dob' value={student.dob} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-blue-500  ml-2 h-12 w-44  bg-transparent" />
          </div>


          <div >
            <label htmlFor='password' className="text-xl"> Password:</label>
            <input type="password" name='password' value={student.password} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-blue-500  ml-2 h-12 w-44  bg-transparent" />
          </div>

          <div className="flex justify-center mt-[5%]">

            <button className="bg-transparent h-12 w-24 rounded-xl  border-blue-500  mr-[50px] mt-6 text-[15px]" onClick={submit}><b>Submit</b></button>
          </div>

        </div>




        <div className="flex justify-center mt-[5%]">
          <button onClick={() => search()}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 32 32">
              <path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"></path>
            </svg></button>

          <label htmlFor='search' className="text-xl"></label>
          <input type='search' id='search' onChange={(e) => setSearch1(e.target.value)} className="bg-transparent h-8 w-36 rounded-xl  border-blue-500  mr-[50px]  text-[15px]" />
        </div>



        <table className='mt-[2%]'>
          <thead>
            <th>Name</th>
            <th>Age</th>
            <th>Dob</th>
            <th>Password</th>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (

                <tr>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.dob}</td>
                  <td>{item.password}</td>
                </tr>

              )
            })}

          </tbody>

        </table>
      </div>

    </>
  );
}

export default App;
