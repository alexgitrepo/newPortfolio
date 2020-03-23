import React, {useState} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import Fade from 'react-reveal/Fade';
import {Field, reduxForm, reset} from "redux-form";
import {Input, Textarea} from "./FormsControl/FormsControl";
import {required} from "../validators/validators";
import * as axios from "axios";

const Contacts = (props) => {
    let [success, changeSuccessStatus] = useState(false)
    const onSubmit = async ({name, contacts, message}) => {
        await axios.post('https://nodejs-smtp.herokuapp.com/sendMessage', {name, contacts, message})
        changeSuccessStatus(true)
    }
    return <section id="contact" className="contact-area section-big">
        <Fade right>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="section-title">
                            <h2>Contact Me</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ContactsFormRedux isSuccess={success} onSubmit={onSubmit}/>
                    </div>
                </div>
            </div>
        </Fade>
    </section>
}
const ContactForm = (props) => {
    let btnClass = props.isSuccess ? "btn success" : "btn"
    return <div className="contact-form">
        <form onSubmit={props.handleSubmit}>
            <div className="form-group in_name">
                <Field validate={required} component={Input} name={'name'} className="form-control" placeholder="Name"/>
            </div>
            <div className="form-group in_email">
                <Field validate={required} component={Input} name={'contacts'} className="form-control"
                       placeholder="contacts"/>
            </div>
            <div className="form-group in_message">
                <Field validate={required} component={Textarea} name={'message'} className="form-control"
                       placeholder="message"/>
            </div>
            <div className="actions">
                <input type="submit" value="Send Message" name="submit"
                       id="submitButton"
                       className={btnClass} title="Submit Your Message!"/>
            </div>
        </form>
    </div>
}
const afterSubmit = (result, dispatch) =>
    dispatch(reset('contacts'))
const ContactsFormRedux = reduxForm({form: 'contacts', onSubmitSuccess: afterSubmit})(ContactForm)
export default Contacts;
