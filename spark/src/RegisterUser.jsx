import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {

    const containerStyle = {
        justifyContent: "center",
        alignItems: "center",
    };

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending form data:", formData); // Add this line
        try {
            const response = await fetch('http://localhost:5000/register_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData)
            });
    
            const errorMessage = await response.text(); // Add this line
            console.log("Server response:", response.status, errorMessage); // Add this line
    
            if (response.ok) {
                navigate('/swipe');
                console.log("Registration successful");
            } else {
                setError(errorMessage || 'Registration failed');
            }
        } catch (err) {
            setError('Failed to connect to server');
            console.error('Error:', err);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundImage: 'linear-gradient(to top,rgb(252, 160, 150), #F75F5F)'  }}>

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth : '450px', width:'100%', height:'30%',backgroundColor: 'rgba(255, 255, 255, 0.85)', borderRadius:'12px', border:'10px solid white'}}>
                <img src="src/assets/mainSwipeIcon.png" style={{width:'100px', height:'auto'}}/>
                <h2 style={{padding: '12px', justifyContent:'center', color: 'black'}}>Register User Account</h2>
                {error && <div className="text-red-500 text-center">{error}</div>}
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                required
                                style={{borderRadius: '8px'}}
                                value={formData.username}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    username: e.target.value
                                })}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                required
                                style={{borderRadius: '8px'}}
                                value={formData.password}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    password: e.target.value
                                })}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        style={{backgroundColor: 'rgba(255, 255, 255, 0.32)', borderRadius: '8px'}}
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterUser;