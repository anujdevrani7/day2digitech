import React, { useState } from 'react'

export default function Passwordgenerator() {
    const [inputs, setInputs] = useState({
        password: "",
        alpha: false,
        numeric: false,
        length: 0,
        generate: false,
        copy: ""


    })
    function Generator() {
        let alphabets = ["abcdefghijklmnopqrstuvwxyz"];
        let numbers = ["0123456789"];
        let possibleCharacters="";
        let tempPassword="";
        for (let i = 0; i < inputs.length; i++) {
            if(inputs.alpha ===true && inputs.numeric){
                possibleCharacters=alphabets+numbers;
                // console.log(possibleCharacters[i]);
                const randomIndex = Math.floor(Math.random() * possibleCharacters.length);
                
                tempPassword+=possibleCharacters.charAt(randomIndex);
                
                
            }
            else if(inputs.alpha===true){
                possibleCharacters+=alphabets;
                // console.log(possibleCharacters[i]);
                const randomIndex = Math.floor(Math.random() * possibleCharacters.length);
                tempPassword+=possibleCharacters.charAt(randomIndex);
          
            }
            else if(inputs.numeric===true){
                possibleCharacters+=numbers;
                // console.log(possibleCharacters[i]);
                const randomIndex = Math.floor(Math.random() * possibleCharacters.length);
                tempPassword+=possibleCharacters.charAt(randomIndex);
                
            }
            else{
                console.log("please make a valid selection ");
            }
            setInputs({ ...inputs, password: tempPassword});


        }

    }
    console.log("Password  generator is called ");
    return (
        <div className="container my-3 py-3">
            <div className="form-floating my-3">
                <input type="text" onChange={(event) => setInputs({ ...inputs, password: event.target.value })} className="form-control" id="floatingPassword" value={inputs.password} placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <label for="customRange2" className="form-label">Set Length : {inputs.length}</label>
            <input type="range" className="form-range" onChange={(event) => setInputs({ ...inputs, length: event.target.value })} value={inputs.length} min="0" max="16" id="customRange2"></input>

            <button type="button" onClick={Generator} className="btn btn-primary mx-3 my-3">Generate</button>
            <button type="button" onClick={() => { navigator.clipboard.writeText(inputs.password) }} className="btn btn-primary mx-3 my-3">Copy Password</button>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={(event) => setInputs({ ...inputs, alpha: event.target.checked })} value={inputs.alpha} id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                    Alphabet
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={(event) => setInputs({ ...inputs, numeric: event.target.checked })} value={inputs.numeric} id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                    Numbers
                </label>
            </div>
        </div>
    )
}

