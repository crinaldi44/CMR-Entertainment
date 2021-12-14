import React from 'react';
import './ContactForm.css'
import Button from '../Button'

/**
 * The ContactForm component posts to DJ Event Planner using the form.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function ContactForm(props) {

    const submitButton = {
        display: 'flex',
        justifyContent: 'center',
    }

    return (
        <form className='form__container' method={'post'} action='https://cmrentertainmentplanning.com/contactus.asp'>
            
            <div className='form__header'>
                <h1>Contact Form</h1>
            </div>
            <div className='form__content'>
            <h2>Contact Info</h2>
                <div className='form__entry'><label><i class='fa fa-user'></i>Full Name*</label>
                        <input className='form__input' name="full_name" required={true} placeholder='Full name'></input>
                </div>
                <div className='form__entry'><label><i class='fa fa-envelope'></i>Email*</label>
                        <input className='form__input' name="email" type={'email'} required={true} placeholder='Email address'></input>
                </div>
                <div className='form__entry'><label><i class='fa fa-phone'></i>Phone Number</label>
                        <input className='form__input' type={'tel'} name="question_1" placeholder='Phone number'></input>
                </div>
            <h2>Event Info</h2>
                <div className='form__entry'>
                        <label><i class='fa fa-book'></i>Type of Event*</label>
                <select required={true} name={"question_3"}>
                        <option>Wedding</option>
                        <option>Bat/Bar Mitzvah</option>
                        <option>Formal</option>
                        <option>School Dance</option>
                        <option> Holiday Party</option>
                        <option>Other (Please specify)</option>
                </select>
                </div>
            <div className='form__entry'>
                <label><i class='fa fa-pencil'></i>If other, please specify:</label>
                <input className='form__input' name='question_4' placeholder='Details'></input>
            </div>
            <div className='form__entry'>
                <label><i class='fa fa-calendar'></i>Date of Event</label>
                <input className='form__input' type={'date'} name='question_2'></input>
            </div>
                <label>Extra info for your event:</label>
                <textarea className="form__textarea" name="message" placeholder='Please enter any miscellaneous info that you feel would aid us in your contact request.'></textarea>
                <p>Please allow up to 48 hours for your response time. We gladly appreciate your request for more information!</p>
            <div style={submitButton}>
            <Button text='SUBMIT'/>
            <input type="hidden" name="showlogo" value=""></input><input type="hidden" name="action" value="process"></input><input type="hidden" name="djidnumber" value="10512"></input><input type="hidden" name="source" value=''></input>
            </div>
            </div>
        </form>
    );
}

export default ContactForm;