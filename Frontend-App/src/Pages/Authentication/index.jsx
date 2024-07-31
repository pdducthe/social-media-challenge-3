//STYLES
import React, { useEffect, useMemo, useState } from "react";
import "./index.scss";
import { useAuth } from "../../Context/AuthContext";

export default function AuthenticationPage() {
  const phoneCode = "84";
  const phoneDigitLength = 9;
  const user = useAuth();
  const spaceRemove = (value) => value.replace(/[^\d]/g, "");
  const [isDisabledBtn, setIsDisabledBtn] = useState({
    submit: true,
    accessCode: true,
  });
  const [formValue, setFormValue] = useState({
    phone: phoneCode,
    accessCode: "",
  });
  const [isReqCode, setIsReqCode] = useState(false);

  const btnStatus = useMemo(() => {
    return {
      submit: isDisabledBtn.submit ? "deactivate" : "activate",
      accessCode: isDisabledBtn.accessCode ? "deactivate" : "activate",
    };
  }, [isDisabledBtn]);

  const handlePhoneChange = (event) => {
    let phoneNumber = event.target.value.replace(/[^\d]/g, "");
    let phoneReturn = "";
    // if (phoneNumber.length >=2 && phoneNumber.length <=6) {
    //   phoneReturn = `${phoneNumber.substring(0, 2)}`;
    // }
    if (phoneNumber.length <= 6) {
      phoneReturn = phoneCode + " " + phoneNumber.substring(2, 6);
    } else {
      phoneReturn =
        phoneCode +
        " " +
        phoneNumber.substring(2, 6) +
        " " +
        phoneNumber.substring(6, 11);
    }

    setFormValue((state) => {
      return { ...state, phone: `${phoneReturn}` };
    });
  };
  const handleCodeChange = (event) => {
    const codeValue = event.target.value.replace(/[^\d]/g, "").substring(0, 6);
    setFormValue((state) => ({
      ...state,
      accessCode: codeValue.split("").join(" "),
    }));
  };
  const handleFirstCodeReq = () => {
    setIsReqCode(true);
  };
  const handleForm = (event) => {
    
    //call api to verify user
    localStorage.setItem('isAuthenticated', "true");

    const {login} = user;
    // @ts-ignore
    login &&  login();
  
  };

  useEffect(() => {
    const phoneNumber = spaceRemove(formValue.phone);
    const accessCode = spaceRemove(formValue.accessCode);
    if (phoneNumber.length - phoneCode.length === phoneDigitLength) {
      setIsDisabledBtn((state) => ({ ...state, accessCode: false }));
    } else {
      setIsDisabledBtn((state) => ({ ...state, accessCode: true }));
    }

    if (
      phoneNumber.length - phoneCode.length === phoneDigitLength &&
      accessCode.length === 6
    ) {
      setIsDisabledBtn((state) => ({ ...state, submit: false }));
    } else {
      setIsDisabledBtn((state) => ({ ...state, submit: true }));
    }
  }, [formValue]);

  return (
    <div className="container">
      <div className="authentication-page">
        <div className="form">
          <h2>Welcome to SKIPLI AI</h2>
          <p>Enter a mobile phone number that you have access to.</p>
          <p>OTP code has been sent to +8490123456</p>
          <br />
          This number will be used to activate your account
          <div className="form-wrapper">
            <form>
              <label>Mobile phone:</label>
              <br />
              <input
                type="text"
                id="fphone"
                name="fphone"
                value={`+${formValue.phone}`}
                onChange={handlePhoneChange}
              />
              <br />
              <label>Access Code:</label>
              <br />
              <input
                type="text"
                id="fcode"
                name="fcode"
                value={formValue.accessCode}
                placeholder="Enter your code here"
                onChange={handleCodeChange}
              />
              <br />
              <div className="btn-container">
                {!isReqCode ? (
                  <button
                    onClick={handleFirstCodeReq}
                    type="button"
                    disabled={isDisabledBtn.accessCode}
                    className={btnStatus.accessCode}
                  >
                    Send Verfication Code
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={isDisabledBtn.accessCode}
                    className={btnStatus.accessCode}
                  >
                    Resend Verfication Code
                  </button>
                )}
                <button
                  disabled={isDisabledBtn.submit}
                  className={btnStatus.submit}
                  type="submit"
                  onClick={handleForm}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
