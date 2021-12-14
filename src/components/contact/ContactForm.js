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
        <form className='form__container' method='post' action='https://cmrentertainmentplanning.com/contactus.asp'>
            
            <div className='form__header'><h1>Contact Form</h1></div>
            <div className='form__content'>
            <h2>Contact Info</h2>
                <div className='form__entry'><label>First Name*</label>
                        <input className='form__input' required={true}></input>
                </div>
                <div className='form__entry'><label>Last Name*</label>
                        <input className='form__input' required={true}></input>
                </div>
                <div className='form__entry'><label>Email*</label>
                        <input className='form__input' required={true}></input>
                </div>
                <div className='form__entry'><label>Phone Number</label>
                        <input className='form__input' ></input>
                </div>
            <h2>Event Info</h2>
                <div className='form__entry'>
                        <label>Type of Event*</label>
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
                <label>If other, please specify:</label>
                <input></input>
            </div>
                    <label>Month of Event</label>
                        <select>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                        </select>
            <label>Day of Event</label>
            <input></input>
            <label>Year of Event</label>
            <input></input>
                <label>Extra info for your event:</label>
                <textarea className="form__textarea"></textarea>
                <p>Please allow up to 48 hours for your response time. We gladly appreciate your request for more information!</p>
            <div style={submitButton}>
            <Button text='SUBMIT'/>
            </div>
            </div>
        </form>
    );
}

export default ContactForm;