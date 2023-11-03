import React from 'react';

const ContactForm = () => {
    return (
        <div style={{ paddingTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Contact Us</h2>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                    <label htmlFor="firstName">First Name</label>
                    <br />
                    <input type="text" id="firstName" placeholder="Enter Your First Name" style={{ width: '300px' }} />
                </div>
                <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                    <label htmlFor="lastName">Last Name</label>
                    <br />
                    <input type="text" id="lastName" placeholder="Enter Your Last Name" style={{ width: '300px' }} />
                </div>
                <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <br />
                    <input type="text" id="phoneNumber" placeholder="Enter Your Phone Number" style={{ width: '300px' }} />
                </div>
                <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                    <label htmlFor="emailAddress">Email Address</label>
                    <br />
                    <input type="text" id="emailAddress" placeholder="Enter Your Email Address" style={{ width: '300px' }} />
                </div>
                <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                    <label htmlFor="country">Country</label>
                    <br />
                    <input type="text" id="country" placeholder="Enter Your Country" style={{ width: '300px' }} />
                </div>
                <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                    <label htmlFor="message">Message</label>
                    <br />
                    <input type="text" id="message" placeholder="Enter Your Message" style={{ width: '300px' }} />
                </div>
                <button style={{ width: '200px', padding: '10px', backgroundColor: 'lightblue', border: 'none', borderRadius: '5px' }}>Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
