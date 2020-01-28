import React, {useState} from 'react'
import axios from "axios/index";

const Contact = (props) => {

    const [inputs, setInputs] = useState({});
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    };

    let sendMessage = function () {
        let data = {
            "name": inputs.name,
            "email": inputs.email,
            "message": inputs.message
        };
        axios({
            method: 'post',
            url: 'https://t9cxnrp6n7.execute-api.us-east-1.amazonaws.com/dev/contact',
            headers: {'Origin': '*'},
            responseType: 'text',
            data: data
        }).then(response => {
            setInputs(inputs => ({...inputs, ['responseMessage']: response.data}));
        }).catch(error => {
            setInputs(inputs => ({...inputs, ['responseMessage']: error.message}));
        });
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
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6" value={inputs.message} onChange={handleInputChange} required />
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special"
                                   onClick={() => sendMessage()}/></li>
                        <li><input type="reset" value="Clear"/></li>
                    </ul>
                    <p>{inputs.responseMessage}</p>
                </form>
            </section>
        </div>
    </section>
};

export default Contact
