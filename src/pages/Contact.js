import React from 'react';
import Banner from '../components/Banner'
import ContactBanner from '../images/banner/contact.png'

/**
 * Represents a page in which a user can initiate contact with the owner of the business.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Contact(props) {
    return (
        <div>
            <Banner
                image={ContactBanner}
                title='Contact Us'
                details='We look forward to hearing from you! To receive a personalized quote for our services, please use the contact form below! We will generally return your request within 48 hours!'/>
        </div>
    );
}

export default Contact;