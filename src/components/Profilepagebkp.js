import React, { useState } from 'react';
import './Profilepage.css' 

const Profilepage = () => {
    const [profile, setProfile] = useState({
        firstName: '',
        surname: '',
        mobileNumber: '',
        addressLine1: '',
        addressLine2: '',
        postcode: '',
        state: '',
        area: '',
        email: '',
        education: '',
        country: '',
        region: '',
        experience: '',
        additionalDetails: '',
    });

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = () => {
        console.log("Profile data saved:", profile);
        // Implement the save functionality here
    };

    return (
        <div>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img
                                className="rounded-circle mt-5"
                                width="150px"
                                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                                alt="Profile"
                            />
                            <span className="font-weight-bold">Edogaru</span>
                            <span className="text-black-50">edogaru@mail.com.my</span>
                        </div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <label className="labels">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="first name"
                                        name="firstName"
                                        value={profile.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Surname</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="surname"
                                        name="surname"
                                        value={profile.surname}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <label className="labels">Mobile Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter phone number"
                                        name="mobileNumber"
                                        value={profile.mobileNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Address Line 1</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter address line 1"
                                        name="addressLine1"
                                        value={profile.addressLine1}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Address Line 2</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter address line 2"
                                        name="addressLine2"
                                        value={profile.addressLine2}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Postcode</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter postcode"
                                        name="postcode"
                                        value={profile.postcode}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">State</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter state"
                                        name="state"
                                        value={profile.state}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Area</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter area"
                                        name="area"
                                        value={profile.area}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Email ID</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="enter email id"
                                        name="email"
                                        value={profile.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Education</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="education"
                                        name="education"
                                        value={profile.education}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label className="labels">Country</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="country"
                                        name="country"
                                        value={profile.country}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">State/Region</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="state"
                                        name="region"
                                        value={profile.region}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <button className="btn btn-primary profile-button" type="button" onClick={handleSave}>
                                    Save Profile
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center experience">
                                <span>Edit Experience</span>
                                <span className="border px-3 p-1 add-experience">
                                    <i className="fa fa-plus"></i>&nbsp;Experience
                                </span>
                            </div>
                            <br />
                            <div className="col-md-12">
                                <label className="labels">Experience in Designing</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="experience"
                                    name="experience"
                                    value={profile.experience}
                                    onChange={handleChange}
                                />
                            </div>
                            <br />
                            <div className="col-md-12">
                                <label className="labels">Additional Details</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="additional details"
                                    name="additionalDetails"
                                    value={profile.additionalDetails}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profilepage;
