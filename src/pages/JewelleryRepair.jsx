import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/JewelleryRepair.css';

const JewelleryRepair = () => {
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [jewelleryType, setJewelleryType] = useState('');
    const [issueDescription, setIssueDescription] = useState('');
    const [otp, setOtp] = useState('');
    const [repairId, setRepairId] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const repairData = { customerName, phoneNumber, jewelleryType, issueDescription };

        try {
            const response = await axios.post('https://projectnewbackend1-1.onrender.com/api/repair/request', repairData);
            setRepairId(response.data.repairId);
            setOtpSent(true);
            alert('Repair request created. OTP sent to your phone.');
            // Reset form values except phoneNumber (needed for OTP verification)
            setCustomerName('');
            // setPhoneNumber(''); ← Removed this line
            setJewelleryType('');
            setIssueDescription('');
        } catch (error) {
            alert('Error creating repair request');
        }
    };

    const verifyOtp = async (e) => {
        e.preventDefault();
        if (!phoneNumber || !otp) {
            alert("Please enter a valid OTP and phone number");
            return;
        }

        const otpData = { phoneNumber, otp };

        try {
            const response = await axios.post('https://projectnewbackend1-1.onrender.com/api/repair/verify-otp', otpData);
            alert('OTP Verified successfully!');
            // Reset everything after successful verification
            setOtpSent(false);
            setOtp('');
            setCustomerName('');
            setPhoneNumber('');
            setJewelleryType('');
            setIssueDescription('');
        } catch (error) {
            alert(error.response?.data?.message || 'Invalid OTP or OTP expired');
        }
    };

    return (
        <div className="repair-wrapper">
            <div className="repair-container">
                <h2 className="repair-heading">Jewellery Repair Request</h2>

                <div className="repair-info">
                    <p><strong>📌 Important Information Before You Submit:</strong></p>
                    <ul>
                        <li>✅ Jewellery repair service takes around <strong>7-10 working days</strong>.</li>
                        <li>✅ Our staff will inspect your item and provide an estimated cost before proceeding.</li>
                        <li>✅ You will receive an OTP for verification after submitting the request.</li>
                        <li>✅ You can track your repair status using the Repair ID provided.</li>
                        <li>✅ Repair charges vary based on item type and damage. Minimum charge: <strong>₹500</strong>.</li>
                    </ul>
                    <hr />
                </div>

                {!otpSent ? (
                    <form className="repair-form" onSubmit={handleSubmit}>
                        <div className="repair-form-group">
                            <label className="repair-label">Customer Name</label>
                            <input
                                className="repair-input"
                                type="text"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="repair-form-group">
                            <label className="repair-label">Phone Number</label>
                            <input
                                className="repair-input"
                                type="text"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div className="repair-form-group">
                            <label className="repair-label">Jewellery Type</label>
                            <input
                                className="repair-input"
                                type="text"
                                value={jewelleryType}
                                onChange={(e) => setJewelleryType(e.target.value)}
                                required
                            />
                        </div>
                        <div className="repair-form-group">
                            <label className="repair-label">Issue Description</label>
                            <textarea
                                className="repair-textarea"
                                value={issueDescription}
                                onChange={(e) => setIssueDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button className="repair-btn" type="submit">Submit Repair Request</button>
                    </form>
                ) : (
                    <div className="otp-container">
                        <h3 className="otp-heading">Enter OTP</h3>
                        <form className="otp-form" onSubmit={verifyOtp}>
                            <div className="repair-form-group">
                                <label className="repair-label">OTP</label>
                                <input
                                    className="repair-input"
                                    type="text"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                />
                            </div>
                            <button className="repair-btn" type="submit">Verify OTP</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JewelleryRepair;
