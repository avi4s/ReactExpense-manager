import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useEffect } from "react";
import './style.css'

const Main = () => {
    const [arr, setArr] = useState([])
    const [val, setVal] = useState({ id: '',mode:'', name: '', amount: '', type: '' })

    const changeVal = (e) => {
        setVal({...val,[e.target.name]:e.target.value})
    }
    const addData=(e)=>{
        e.preventDefault()
        console.log(val)
        setArr([...arr,val])
        setVal({mode:'', name: '', amount: '', type: '' })
    }
    return (
        <>
            <div className="container text-center">
                <h1>Expense Manager</h1><br></br>
                <form onSubmit={addData}>
                    <div className="row">
                        <div className="col-md-3">
                            <select name="mode" value={val.mode} onChange={changeVal} className='mb-2'>
                                <option value=''>--Select Mode--</option>
                                <option value='cash'>Cash</option>
                                <option value='upi'>UPI</option>
                                <option value='other'>Other</option>
                            </select>
                        </div>

                        <div className="col-md-3">
                            <input className='mb-2' type='text' name='name' placeholder="Enter Your Name" value={val.name} onChange={changeVal} />
                        </div>

                        <div className="col-md-3">
                            <input className='mb-2' type='number' name='amount' placeholder="Enter Amount" value={val.amount} onChange={changeVal} />
                        </div>

                        <div className="col-md-3">
                            <select className='mb-2' name="type" value={val.type} onChange={changeVal}>
                                <option value=''>--Select Type--</option>
                                <option value='payment'>Payment</option>
                                <option value='received'>Received</option>
                            </select>
                        </div>
                    </div>

                    <div className="container2 text-center">
                        <div className="row">
                            <div className="col-md-12">
                                <button className="bg-warning w-25 mt-5 mb-5" id="but">Add</button>
                            </div>
                        </div>
                    </div>
                </form><br></br>

                <table className="table table-bordered text-center" style={{border:'2px solid black'}}>
                    <thead className="theader">
                        <tr>
                            <th className="">Mode</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {arr.map((v) => {
                            return (
                                <tr key={v.id}>
                                    <td>{v.mode}</td>
                                    <td>{v.name}</td>
                                    <td>{v.amount}</td>
                                    <td>{v.type}</td>
                                    <td><button className="editButton" onClick={() => {
                                        setArr(arr.filter((n) => {
                                            return v !== n
                                        }))
                                        setVal(v)
                                    }}>🖋️</button>
                                        <button className="deleteButton" onClick={() => {
                                            setArr(arr.filter((n) => {
                                                return v !== n
                                            }))
                                        }}>🗑️</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Main