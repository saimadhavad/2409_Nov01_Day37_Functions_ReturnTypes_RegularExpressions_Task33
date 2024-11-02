import React, { useRef } from 'react'

function StudentTenthMarkSheet() {

    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();

    let teluguMarksInputRef = useRef();
    let hindiMarksInputRef = useRef();
    let englishMarksInputRef = useRef();
    let mathsMarksInputRef = useRef();
    let scienceMarksInputRef = useRef();
    let socialMarksInputRef = useRef();
    
    let firstNameSpanResultRef = useRef();
    let lastNameSpanResultRef = useRef();
    let emailSpanResultRef = useRef();
    let passwordSpanResultRef = useRef();
    let teluguMarksSpanResultRef = useRef();
    let hindiMarksSpanResultRef = useRef();
    let englishMarksSpanResultRef = useRef();
    let mathsMarksSpanResultRef = useRef();
    let scienceMarksSpanResultRef = useRef();
    let socialMarksSpanResultRef = useRef();

    let labelResultRef =  useRef();

    let fullNameRegex = /^[A-Za-z\s]{2,30}$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;

    let calculateResult = () => {
        let firstName = firstNameInputRef.current.value;
        let lastName = lastNameInputRef.current.value;
        // let email = emailInputRef.current.value;                        
        // let password = passwordInputRef.current.value;

        let teluguMarks = Number(teluguMarksInputRef.current.value);
        let hindiMarks = Number(hindiMarksInputRef.current.value);
        let englishMarks = Number(englishMarksInputRef.current.value);                        
        let mathsMarks = Number(mathsMarksInputRef.current.value);
        let scienceMarks = Number(scienceMarksInputRef.current.value);
        let socialMarks = Number(socialMarksInputRef.current.value);

        let totalMarks  = teluguMarks+hindiMarks+englishMarks+mathsMarks+scienceMarks+socialMarks;
        let percentage =  (totalMarks/600)*100;

        labelResultRef.current.innerHTML = `${firstName} ${lastName} 's Total Marks ${totalMarks} with (${percentage.toFixed(2)}%)`;
    };

    let onFocus = (inputRef) => {
        inputRef.current.style.backgroundColor = `#2C5364`;
        inputRef.current.style.color = `white`;
    };
    let onBlur = (inputRef) => {
        inputRef.current.style.backgroundColor = ``;
        inputRef.current.style.color = ``;
    };
    let onChange = (inputRef,spanRef) => {
        let marks =inputRef.current.value;

        if(marks>=0 && marks<=100) {
            if(marks>=35) {
                spanRef.current.innerHTML = "✔️ Pass";
            }
            else {
                spanRef.current.innerHTML = "❌ Fail";
            }
        }
        else {
            spanRef.current.innerHTML = "❎ Invalid";
        }
    };

    let validateName  = (inputRef,SpanRef) => {
        let nameResult = fullNameRegex.test(inputRef.current.value);
        if(nameResult == true) {
            SpanRef.current.innerHTML = "✔️ Valid Name" ;
        }
        else {
            SpanRef.current.innerHTML = "❌ Invalid Name" ;
        }
    };
    let validateEmail = (inputRef,SpanRef) => {
        let emailResult = emailRegex.test(inputRef.current.value);
        if(emailResult == true){
            SpanRef.current.innerHTML = "✔️ Valid Email" ;
        }
        else {
            SpanRef.current.innerHTML = "❌ Invalid Email" ;
        }
    };
    let validatePassword = (inputRef,SpanRef) => {
        let passwordResult = passwordRegex.test(inputRef.current.value);
        if (passwordResult == true) {
            SpanRef.current.innerHTML = "✔️ Valid Password" ;
        }
        else{
            SpanRef.current.innerHTML = "❌ Invalid Password" ;
        }
    };


  return (
    <div className="StudentTenthMarkSheet"> 
    <h1>Secondary Education MarkSheet</h1>
        <form>
            <fieldset className='personalDetails'>
                <legend>Personal Details</legend>
            <div className='firstName'> 
                <label>First name</label>
                <span className="colonSpace">:</span>
                <input type='text' ref={firstNameInputRef}
                    onFocus={ () => {onFocus(firstNameInputRef);} }
                    onChange={ () => {validateName(firstNameInputRef,firstNameSpanResultRef);} }
                    onBlur={ () => {onBlur(firstNameInputRef);} }
                ></input>
                <span className='resultSpan' ref={firstNameSpanResultRef}></span>
            </div>
            <div className='lastName'>
                <label>Last name</label>
                <span className="colonSpace">:</span>
                <input type='text' ref={lastNameInputRef}
                     onFocus={ () => {onFocus(lastNameInputRef);} }
                     onChange={ () => {validateName(lastNameInputRef,lastNameSpanResultRef);} }
                     onBlur={ () => {onBlur(lastNameInputRef);} }
                 ></input>
                <span className='resultSpan' ref={lastNameSpanResultRef}></span>
            </div>
            <div className='email'>
                <label>Email</label>
                <span className="colonSpace">:</span>
                <input type='text' ref={emailInputRef}
                     onFocus={ () => {onFocus(emailInputRef);} }
                     onChange={ () => {validateEmail(emailInputRef,emailSpanResultRef)} }
                     onBlur={ () => {onBlur(emailInputRef);} }
                 ></input>
                <span className='resultSpan' ref={emailSpanResultRef}></span>
            </div>
            <div className='password'>
                <label>Password</label>
                <span className="colonSpace">:</span>
                <input type='password' ref={passwordInputRef}
                      onFocus={ () => {onFocus(passwordInputRef);} }
                      onChange={ () => {validatePassword(passwordInputRef,passwordSpanResultRef);} }
                      onBlur={ () => {onBlur(passwordInputRef);} }
                ></input>
                <span className='resultSpan' ref={passwordSpanResultRef}></span>
            </div>
            </fieldset>
            <fieldset className='marksDetails'>
                <legend>Marks Details</legend>
            <div className='teluguMarks'>
                <label>Telugu</label>
                <span className="colonSpace">:</span>
                <input type='number' ref={teluguMarksInputRef}
                    onFocus={ () => {onFocus(teluguMarksInputRef);} }
                    onChange={ () => {onChange(teluguMarksInputRef,teluguMarksSpanResultRef);} }
                    onBlur={ () => {onBlur(teluguMarksInputRef);} }
                ></input>
                <span className='resultSpan' ref={teluguMarksSpanResultRef}></span>
            </div>
            <div className='hindiMarks'>
                <label>Hindi</label>
                <span className="colonSpace">:</span>
                <input type='number' ref={hindiMarksInputRef}
                    onFocus={ () => {onFocus(hindiMarksInputRef);} }
                    onChange={ () => {onChange(hindiMarksInputRef,hindiMarksSpanResultRef);} }
                    onBlur={ () => {onBlur(hindiMarksInputRef);} }
                ></input>
                <span className='resultSpan' ref={hindiMarksSpanResultRef}></span>
            </div>
            <div className='englishMarks'>
                <label>English</label>
                <span className="colonSpace">:</span>
                <input type='number' ref={englishMarksInputRef}
                    onFocus={ () => {onFocus(englishMarksInputRef);} }
                    onChange={ () => {onChange(englishMarksInputRef,englishMarksSpanResultRef);} }
                    onBlur={ () => {onBlur(englishMarksInputRef);} }
                ></input>
                <span className='resultSpan' ref={englishMarksSpanResultRef}></span>
            </div>
            <div className='mathsMarks'>
                <label>Maths</label>
                <span className="colonSpace">:</span>
                <input type='number' ref={mathsMarksInputRef}
                    onFocus={ () => {onFocus(mathsMarksInputRef);} }
                    onChange={ () => {onChange(mathsMarksInputRef,mathsMarksSpanResultRef)} }
                    onBlur={ () => {onBlur(mathsMarksInputRef);} }
                ></input>
                <span className='resultSpan' ref={mathsMarksSpanResultRef}></span>
            </div>
            <div className='scienceMarks'>
                <label>Science</label>
                <span className="colonSpace">:</span>
                <input type='number' ref={scienceMarksInputRef}
                    onFocus={ () => {onFocus(scienceMarksInputRef);} }
                    onChange={ () => {onChange(scienceMarksInputRef,scienceMarksSpanResultRef);} }
                    onBlur={ () => {onBlur(scienceMarksInputRef);} }
                ></input>
                <span className='resultSpan' ref={scienceMarksSpanResultRef}></span>
            </div>
            <div className='socialMarks'>
                <label>Social</label>
                <span className="colonSpace">:</span>
                <input type='number' ref={socialMarksInputRef}
                    onFocus={ () => {onFocus(socialMarksInputRef);} }
                    onChange={ () => {onChange(socialMarksInputRef,socialMarksSpanResultRef);} }
                    onBlur={ () => {onBlur(socialMarksInputRef);} }
                ></input>
                <span className='resultSpan' ref={socialMarksSpanResultRef}></span>
            </div>
            </fieldset>
            <div>
                <button type='button'

                    onClick={ () => { calculateResult(); } }                   

                >Calculate Result!</button>
            </div>
            <label className='innerLabel' ref={labelResultRef}></label>
        </form>
      
    </div>
  )
}

export default StudentTenthMarkSheet
