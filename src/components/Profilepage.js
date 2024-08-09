import React, { useState, useEffect } from 'react';
import './Profilepage.css';

const Profilepage = () => {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        userID: '',
        date: '',
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/auth/getuser', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': localStorage.getItem('token')
                    }
                });
                const userData = await response.json();
                console.log(userData)
                setProfile({
                    name: userData.name,
                    email: userData.email,
                    userID: userData._id,
                    date: new Date(userData.date).toLocaleDateString(),
                });
            } catch (error) {
                
                console.error('Failed to fetch user data', error);
            }
        };
        fetchUserData();
    }, []);

    const handleSave = () => {
        console.log("Profile data saved:", profile);
        // Implement the save functionality here
    };

    return (
        <div>
            <div className="profile-page">
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
                            <span className="font-weight-bold">{profile.name}</span>
                            <span className="text-black-50">{profile.email}</span>
                            <span className="text-black-50">User ID: {profile.userID}</span>
                            <span className="text-black-50">Joined: {profile.date}</span>
                        </div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-12">
                                    <label className="labels">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        name="name"
                                        value={profile.name}
                                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <label className="labels">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        name="email"
                                        value={profile.email}
                                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <button className="btn btn-primary profile-button" type="button" onClick={handleSave}>
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        {/* Optional: Additional fields can be added here */}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Profilepage;
