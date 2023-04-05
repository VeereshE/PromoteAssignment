import React ,{useState}from 'react';



import './index.css'


function IncomeSources(){
            const[baseSalary,setSalary] = useState("")
            const [HRA,setHRA] = useState("")
            const [SpecialAllowance,setSpecialAllowance] = useState("")
            const [OtherAllowances,setOtherAllowances] = useState("")
            const [LTA,setLTA] = useState("")
            const [Reimbursements,setReimbursements] = useState("")
            const [ProvidentTax,setProvidentTax] = useState("")
            const [IncomeTTax,setIncomeTTax] = useState("")
            const [Transport,setTransport] = useState("")
            const [grossAnnual,setgrossAnnul] = useState("")
            const [Municipal,setMunicipal] = useState("")
            const [Standard,setStatard] = useState("")
            const [HomeLoan,setHomeLoan] = useState("")
            const [ShortTerm,setShortTerm] = useState("")
            const [LongTerm,setLongTerm] = useState("")
            const [Interest,setInterest] = useState("")
            const [DividendIncome,setDividendIncome] = useState("")
            const [IncomefromBusiness,setIncomefromBusiness] = useState("")
            const [AgriculturalIncome,setAgriculturalIncome] = useState("")
            const [Miscellaneous,setMiscellaneous] = useState("")

            const [total,settotal] = useState("")
            const[Income,setIncome] = useState("")
            const[Capital,setCapital] = useState("")
            const[OtherIncome,setOtherIncome] = useState("")
            const [SubtractExemptions,setSubtractExemptions] = useState("")
            const [NAV,setNAV] = useState("")




     const  onClickDividendIncome= (e) =>{
        setDividendIncome(e.target.value)
    }

    const onClickOtherMiscellaneous = (e) =>{
        setMiscellaneous(e.target.value)
    }


    const onClickAgriculturalIncome = (e) =>{
        setAgriculturalIncome (e.target.value)
    }

    const  onClickIncomefromBusiness= (e) =>{
        setIncomefromBusiness(e.target.value)
    }

    const onClickHomeLoan = (e) =>{
        setHomeLoan(e.target.value)
    }

    const onClickInterest = (e) =>{
        setInterest(e.target.value)
    }

    const onClickLTA = (e) =>{
        setLTA(e.target.value)
    }

    const onClickStandard = (e) =>{
        setStatard(e.target.value)
    }
 
    const  onClickMuicipal = (e) =>{
        setMunicipal(e.target.value)
    }


    const onClickReimbursements = (e) =>{
        setReimbursements(e.target.value)
    }

    const onClickOtherAllowances = (e) =>{
        setOtherAllowances(e.target.value)
     }

     const onClickProvidentTax = (e)=>{
        setProvidentTax(e.target.value)
     }


     const  onClickIncomeTax= (e) =>{
        setIncomeTTax(e.target.value)
     }

    const onClickTransport = (e) =>{
        setTransport(e.target.value)
     }

    const onClickSalary = (e) =>{
       setSalary(e.target.value)
    }

    const onClickHRA = (e) =>{
        setHRA(e.target.value)
     }

     const onClickSpecialAllowance = (e) =>{
        setSpecialAllowance(e.target.value)
     }

     const onClickGrossAnnual = (e) =>{
        setgrossAnnul(e.target.value)
     }

     const onClickShortTerm = (e)=>{
        setShortTerm(e.target.value)
     }

     const onClickLongTerm = (e)=>{
        setLongTerm(e.target.value)
     }


     
     function onClickTotalSalary(){
        if (baseSalary!== "" || SpecialAllowance!== ""|| Transport!== "" || OtherAllowances!==""||Reimbursements!==""||ProvidentTax!==""||IncomeTTax!==""){
            settotal(parseInt(baseSalary) +parseInt (HRA) + parseInt(SpecialAllowance) + parseInt(Transport) + parseInt(OtherAllowances) + parseInt(Reimbursements) +parseInt(ProvidentTax) + parseInt(IncomeTTax) + parseInt(LTA)) 
            setSubtractExemptions((parseInt(baseSalary) +parseInt (HRA) + parseInt(SpecialAllowance) + parseInt(Transport) + parseInt(OtherAllowances) + parseInt(Reimbursements) +parseInt(ProvidentTax) + parseInt(IncomeTTax)) - (parseInt (HRA)+parseInt(LTA)))
        }
     }


     function onClickIncome(){
       if ((grossAnnual !== "" || Municipal!== "" || Standard!=="")&& HomeLoan!==""){
        setIncome(parseInt(grossAnnual)+parseInt(Municipal)+0.3 * parseInt(Standard)+parseInt(HomeLoan))
       } else{
        setIncome(parseInt(grossAnnual)+parseInt(Municipal)+0.3 * parseInt(Standard))
       }

       setNAV(parseInt(Municipal)-parseInt(grossAnnual))
    }

    
    
    function onClickCapital(){
        setCapital(parseInt(ShortTerm) + parseInt(LongTerm))
    }

    function onClickOtherIncome(){
        setOtherIncome(parseInt(Interest) + parseInt(DividendIncome)+parseInt(IncomefromBusiness)+parseInt(AgriculturalIncome)+parseInt(Miscellaneous))    
     }


    

    return(
        <div className="SalaryDetails">
        <h2 className='heading'>Income Sources:</h2>
        <h3 className='head'>1.Salary:</h3>
        <input  className='head1' placeholder='Total Salary' value={total}  /><span>** Adding Total Salary</span><br/>
        <p className='para'> Subtract Exemptions : {SubtractExemptions}</p>
            <label className='label'>Base Salary</label>
            <input type='text' className='input' placeholder='Enter your Base Salary' onChange={onClickSalary} value ={baseSalary}/>
            <label className='label'>House Rent Allowance(HRA)</label>
            <input type='text' className='input' placeholder='Enter your HRA' onChange={onClickHRA} value ={HRA} />
            <label className='label'>Special Allowance</label>
            <input type='text' className='input' placeholder='Enter your Special Allowance' onChange={onClickSpecialAllowance} value ={SpecialAllowance} /><br/>
            <label className='label'>Transport Allowance</label>
            <input type='text' className='input' placeholder='Enter your Transport Allowance' onChange={onClickTransport} value ={Transport}  />
            <label className='label'>Other Allowances</label>
            <input type='text' className='input' placeholder='Enter your Other Allowances ' onChange={onClickOtherAllowances} value ={OtherAllowances} /><br/>
            <label className='label'>Leave Travel Allowance (LTA)</label>
            <input type='text' className='input' placeholder='Enter your (LTA) ' onChange={onClickLTA} value ={LTA} /><br/>
            <label className='label'>Reimbursements (Medical, Fuel, etc.)</label>
            <input type='text' className='input' placeholder='Enter your Reimbursements' onChange={onClickReimbursements} value ={Reimbursements} />
            <label className='label'>Employer's Contribution to Provident Fund</label>
            <input type='text' className='input' placeholder='Enter your Provident Fund ' onChange={onClickProvidentTax} value ={ProvidentTax}  /><br/>
            <label className='label'>Income Tax Deducted at Source (TDS)</label>
            <input type='text' className='input' placeholder='Enter your(TDS) 'onChange={onClickIncomeTax} value ={IncomeTTax}  /><br/>

            <button className='button' onClick={onClickTotalSalary} >Calculator Salary</button><br/>


            <h3 className='head'>2.Income from House Property:</h3>
            <input  className='head1' placeholder='Total Income from House Property' value = {Income}/><span>** Adding Total Income from House Property</span><br/>
            <p className='para'> NAV:Net Annual Value :{NAV}</p>
            <label className='label'>Gross Annual Rent Received</label>
            <input type='text' className='input' placeholder='Enter your Gross' onChange={onClickGrossAnnual} value ={grossAnnual}/><br/>
            <label className='label'>Municipal Taxes Paid</label>
            <input type='text' className='input' placeholder='Enter your Municipal Tax' onChange={onClickMuicipal} value ={Municipal} /><br/>
            <label className='label'>Standard Deduction (30% of Net Annual Value)</label>
            <input type='text' className='input' placeholder='Enter your Standard Deduction' onChange={onClickStandard} value ={Standard} /><br/>
            <label className='label'>Interest Paid on Home Loan (if applicable)</label>
            <input type='text' className='input' placeholder='Enter your Home Loan' onChange={onClickHomeLoan} value ={HomeLoan}  /><br/>

            <button className='button' onClick={onClickIncome} >Calculator Income</button><br/>



            

            <h3 className='head'>3.Capital Gains:</h3>
            <input  className='head1' placeholder='Total Capital Gains' value={Capital}/><span>**Adding Total Capital Gains</span>
            <label className='label'>Short-Term Capital Gains</label>
            <input type='text' className='input' placeholder='Enter your Short-Term' onChange={onClickShortTerm} value ={ShortTerm}/>
            <label className='label'>Long-Term Capital Gains</label>
            <input type='text' className='input' placeholder='Enter your Long-Term' onChange={onClickLongTerm} value ={LongTerm} /><br/>

            <button className='button'  onClick={onClickCapital}>Calculator Capital Gains</button><br/>


           

            <h3 className='head'>4.Other Income:</h3>
            <input  className='head1' placeholder='Total Other Income' value={OtherIncome}/><span>** Adding Total Other Income </span><br/>
            <label className='label'>Interest Income (Savings Account, Fixed Deposits, etc.)</label>
            <input type='text' className='input' placeholder='Enter your Interest Income' onChange={onClickInterest} value ={Interest}/><br/>
            <label className='label'>Dividend Income - Rental Income (other than House Property)</label>
            <input type='text' className='input' placeholder='Enter your Dividend Income' onChange={onClickDividendIncome} value ={DividendIncome} /><br/>
            <label className='label'>Income from Business / Profession</label>
            <input type='text' className='input' placeholder='Enter your Income from Business' onChange={onClickIncomefromBusiness} value ={IncomefromBusiness} /><br/>
            <label className='label'>Agricultural Income</label>
            <input type='text' className='input' placeholder='Enter your Home Loan' onChange={onClickAgriculturalIncome} value ={AgriculturalIncome}  />
            <label className='label'>Other Miscellaneous Income</label>
            <input type='text' className='input' placeholder='Enter your Home Loan' onChange={onClickOtherMiscellaneous} value ={Miscellaneous}  /> <br/>

            <button className='button' onClick={onClickOtherIncome} >Calculator total Other Income</button><br/>

            


          
        </div>
    )   
}

export default IncomeSources

