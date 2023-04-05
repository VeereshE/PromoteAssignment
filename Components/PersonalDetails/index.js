import React ,{useState}from 'react';

import IncomeSources from '../Income Sources';
import DeductionsAndExemptions from '../DeductionsAndExemptions'

import './index.css'

function PersonalDetails(){

   const [userName,setuserName] = useState("");
   const [userAge,setuserAge] = useState("");

   const onChangeUserName = (e) =>{
    setuserName(e.target.value);
   }

   const onChangeUserAge = (e) =>{
    setuserAge(e.target.value);
   }



    return(
        <div className='AppContainer'>
            <h1 className='text'>INCOME AND TAX CALCULATOR</h1>
                <div className='details'>
                <h2 className='heading'>Personal Details:</h2>
                    <label className='label'>Name</label>
                    <input type='text' className='input' placeholder='Enter your Name' onChange={onChangeUserName} value ={userName}/>
                    <label className='label'>Date of Birth / Age</label>
                    <input type='number' className='input' placeholder='Enter your DOB/Age'  onChange={onChangeUserAge} value = {userAge}/>
                    <label className='label'>Gender</label>
                    <select name="gender" id="gender" className='selecter'>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="transgender">Transgender</option>
                    </select>
                    <label className='label'>Residential Status</label>
                    <select name="status" id="status" className='selecter'>
                        <option value="resident">Resident</option>
                        <option value="nonResident">Non-Resident</option>
                        <option value="NotOrdinaryResident">Not Ordinary Resident</option>
                    </select>
                </div>
            <IncomeSources/>
            <DeductionsAndExemptions/>
        </div>
    )
}

export default PersonalDetails

