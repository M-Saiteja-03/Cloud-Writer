import React, { useEffect, useState } from 'react';
import  './Profilebutton.css'
import { useNavigate } from 'react-router-dom';



const Profilebutton = () => {

    const navigate = useNavigate();

    const svgStyle = {
        width: '32px',
        height: '32px',
        fill: '#FFFFFF',
        transition: 'fill 0.3s',
    };

    const svgHoverStyle = {
        fill: '#000000',
    };

    const [user, setUser] = useState(null);
    const fetchuser = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/getuser", {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                }
            });
            const json = await response.json();
            setUser(json);
        } catch (error) {
            console.error('Error fetching user:', error);
            setUser(null); // Clear user data if there's an error
        }
    }
    useEffect(() => {
        if (localStorage.getItem('token')) {
            fetchuser(); // Fetch user data when token is available
            console.log(user)
        } else {
            setUser(null); // Clear user data on logout
        }
    }, []);

    return (
        <div>
            <button className="btn btn-custom mx-1" style={svgHoverStyle} onClick={()=> navigate('/profile')}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#FFFFFF"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                    style={svgStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.fill = svgHoverStyle.fill)}
                    onMouseLeave={(e) => (e.currentTarget.style.fill = svgStyle.fill)}
                >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
                <span style={{ color: '#FFFFFF' }}>
                    {user ? user.name : 'Loading...'}
                </span>
            </button>
        </div>
    );
};

export default Profilebutton;

