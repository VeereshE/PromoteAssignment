import React ,{useState}from 'react';



import './index.css'


function IncomeSources(){

    const [LIP,setLPI] = useState("")
    const [PPF,setPPF] = useState("")
    const [EPF,setEPF] = useState("")
    const [TaxSaving,setTaxSaving] = useState("")
    const [ELSS,setELSS] = useState("")
    const [Principal,setPrincipal] = useState("")
    const [Children,setChildren] = useState("")
    const [NSC,setNSC] = useState("")

    const [D,setD] = useState("")
    const [E,setE] = useState("")
    const [G,setG] = useState("")
    const [TTA,setTTA] = useState("")
    const [U,setU] = useState("")
    const [D24,setD24] = useState("")
    const [applicable,setapplicable] = useState("")

    const [section,setsection] = useState("")
    const [total,settotal] = useState("")
    const[Income,setIncome] = useState("")
    const[Capital,setCapital] = useState("")
    const[OtherIncome,setOtherIncome] = useState("")
    const [TotalCalcu,setTotalCalcu] = useState("")

    
    


    const  onClickPrincipal= (e) =>{
        setPrincipal(e.target.value)
    }

    const  onClick80U= (e) =>{
        setU(e.target.value)
    }

    const  onClick80D= (e) =>{
        setD(e.target.value)
    }

    
    const  onClick80TTA= (e) =>{
        setTTA(e.target.value)
    }


    
    const  onClick80G= (e) =>{
        setG(e.target.value)
    }

    const  onClick24= (e) =>{
        setD24(e.target.value)
    }

    const  onClick80E= (e) =>{
        setE(e.target.value)
    }



    const onClickELSS = (e) =>{
        setELSS(e.target.value)
    }

 


    const onClickTaxSaving = (e) =>{
        setTaxSaving(e.target.value)
     }

     const onClickChildern = (e)=>{
        setChildren(e.target.value)
     }


   
    const onClickNSC = (e) =>{
        setNSC(e.target.value)
     }

    const onClickLIP = (e) =>{
       setLPI(e.target.value)
    }

    const onClickPPF = (e) =>{
        setPPF(e.target.value)
     }

     const onClickEPF = (e) =>{
        setEPF(e.target.value)
     }

     const onClickapplicable = (e) =>{
        setapplicable(e.target.value)
     }

     function onClickSection80C(){
        setsection(parseInt(LIP)+parseInt(PPF)+parseInt(EPF)+parseInt(NSC)+parseInt(TaxSaving)+parseInt(ELSS)+parseInt(Principal)+parseInt(Children))
     }

     function onClickTotalTaxCalcu(){
        
        setTotalCalcu(settotal(parseInt(total)) +setIncome(parseInt(Income))  + setCapital(parseInt(Capital)) +setOtherIncome(parseInt(OtherIncome)) + parseInt(D) + parseInt(E) + parseInt(G) + parseInt(TTA) + parseInt(U) + parseInt(D24) + parseInt(applicable) )
    }

   

     
    return(
        <div className="SalaryDetails">
        <h2 className='heading'>Deductions and Exemptions:</h2>
        <h3 className='head'>1.Section 80C Deductions (Investments and Expenses):</h3>
        <input  className='head1' placeholder='Total Salary' value={section}/><span>** Adding Total Investments and Expenses</span><br/>
            <label className='label'>Life Insurance Premium</label>
            <input type='text' className='input' placeholder='Enter your LIP' onChange={onClickLIP} value ={LIP}/>
            <label className='label'>Public Provident Fund (PPF)</label>
            <input type='text' className='input' placeholder='Enter your PPF' onChange={onClickPPF} value ={PPF} /><br/>
            <label className='label'>Employee Provident Fund (EPF)</label>
            <input type='text' className='input' placeholder='Enter your EPF' onChange={onClickEPF} value ={EPF} /><br/>
            <label className='label'>National Savings Certificates (NSC)</label>
            <input type='text' className='input' placeholder='Enter your NSC' onChange={onClickNSC} value ={NSC}  />
            <label className='label'>Tax Saving Fixed Deposits</label>
            <input type='text' className='input' placeholder='Enter your tax Saving Fixed Deposits ' onChange={onClickTaxSaving} value ={TaxSaving} /><br/>
            <label className='label'>Equity Linked Saving Scheme (ELSS)</label>
            <input type='text' className='input' placeholder='Enter your (ELSS) ' onChange={onClickELSS} value ={ELSS} /><br/>
            <label className='label'>Principal Repayment on Home Loan</label>
            <input type='text' className='input' placeholder='Enter your Reimbursements' onChange={onClickPrincipal} value ={Principal} />
            <label className='label'>Children's Tuition Fees</label>
            <input type='text' className='input' placeholder='Enter your Provident Fund ' onChange={onClickChildern} value ={Children}  /><br/>

            <button className='button' type='button' onClick={onClickSection80C}>Calculator Section 80C</button>
        
            <h3 className='head'>2.Section 80D Deduction (Medical Insurance Premium):</h3>
            <input placeholder='Section 80D Deduction (Medical Insurance Premium)' className='input1'  onChange={onClick80D} value ={D}/>

            <h3 className='head'>3.Section 80E Deduction (Interest on Education Loan):</h3>
            <input placeholder='Section 80E Deduction (Interest on Education Loan)' className='input1' onChange={onClick80E} value ={E}/>

            <h3 className='head'>4.Section 80G Deduction (Donations to Charitable Institutions):</h3>
            <input placeholder='Section 80G Deduction (Donations to Charitable Institutions)' className='input1' onChange={onClick80G} value ={G}/>

            <h3 className='head'>5.Section 80TTA Deduction (Interest on Savings Account):</h3>
            <input placeholder='Section 80TTA Deduction (Interest on Savings Account)' className='input1' onChange={onClick80TTA} value ={TTA}/>

            <h3 className='head'>6.Section 80U Deduction (Disability):</h3>
            <input placeholder='Section 80U Deduction (Disability)' className='input1' onChange={onClick80U} value ={U}/>

            <h3 className='head'>7.Section 24 Deduction (Interest on Home Loan):</h3>
            <input placeholder='Section 24 Deduction (Interest on Home Loan)' className='input1'  onChange={onClick24} value ={D24}/>

            <h3 className='head'>8.Other Deductions (as applicable):</h3>
            <input placeholder='Other Deductions (as applicable)' className='input1' onChange={onClickapplicable} value ={applicable}/><br/>
                    
            <button className='button' type='button' onClick={onClickTotalTaxCalcu} >Tax Calculator</button>
                 <input value={TotalCalcu} placeholder='Total Calculator'/>   
               
        
        </div>
    )   
}

export default IncomeSources