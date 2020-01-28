import React, {useState} from 'react'
import axios from "axios/index";
import BarLoader from "react-spinners/BarLoader";

const Contact = (props) => {

    const [inputs, setInputs] = useState({});
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    };

    let sendMessage = function () {
        setInputs(inputs => ({...inputs, ['spinnerLoading']: true}));
        setInputs(inputs => ({...inputs, ['responseMessage']: ""}));
        console.log(inputs);
        if(!inputs.name || !inputs.email || !inputs.messageText) {
            return
        }

        let data = {
            "name": inputs.name,
            "email": inputs.email,
            "message": inputs.messageText
        };
        axios({
            method: 'post',
            url: 'https://t9cxnrp6n7.execute-api.us-east-1.amazonaws.com/dev/contact',
            responseType: 'text',
            data: data
        }).then(response => {
            setInputs(inputs => ({...inputs, ['responseMessage']: response.data}));
            setInputs(inputs => ({...inputs, ['spinnerLoading']: false }));
        }).catch(error => {
            setInputs(inputs => ({...inputs, ['responseMessage']: error.message}));
            setInputs(inputs => ({...inputs, ['spinnerLoading']: false }));
        });
    };

    let clear = function () {
        setInputs(inputs => ({...inputs, ['messageText']: ""}));
        setInputs(inputs => ({...inputs, ['name']: ""}));
        setInputs(inputs => ({...inputs, ['email']: ""}));
        setInputs(inputs => ({...inputs, ['responseMessage']: ""}));
        setInputs(inputs => ({...inputs, ['spinnerLoading']: false }));
    };

    return <section id="contact">
        <div className="inner">
            <section>
                <form onSubmit={(event) => event.preventDefault()}>
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={inputs.name} onChange={handleInputChange} required />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" value={inputs.email} onChange={handleInputChange} required />
                    </div>
                    <div className="field">
                        <label htmlFor="messageText">Message</label>
                        <textarea name="messageText" id="messageText" rows="6" value={inputs.messageText} onChange={handleInputChange} required />
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special"
                                   onClick={() => sendMessage()}/></li>
                        <li><input type="reset" value="Clear" onClick={() => clear()}/></li>
                    </ul>

                    <BarLoader
                        hight="6"
                        width="150px"
                        color={"white"}
                        loading={inputs.spinnerLoading}
                        />
                    <p>{inputs.responseMessage}</p>
                    
                </form>
            </section>
        </div>
    </section>
};

export default Contact
