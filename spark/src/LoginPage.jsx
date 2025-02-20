import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

function LoginPage() {
    const [formData, setFormData] = useState({
            username: '',
            password: '',
        });


    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending login data:", formData); // Debug log
        
        try {
            const response = await fetch('http://localhost:5000/login', {  // Changed to login endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData)
            });

            const data = await response.text();
            console.log("Server response:", response.status, data); // Debug log

            if (response.ok) {
                console.log("Login successful");
                navigate('/swipe');  // Navigate to swipe page after successful login
            } else {
                setError(data || 'Login failed');
            }
        } catch (err) {
            setError('Failed to connect to server');
            console.error('Error:', err);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundImage: 'linear-gradient(to top,rgb(252, 160, 150), #F75F5F)'  }}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth : '600px', width:'100%', height:'30%',backgroundColor: 'rgba(255, 255, 255, 0.85)', borderRadius:'12px', border:'10px solid white'}}>
            <img src="src/assets/mainSwipeIcon.png" style={{width:'100px', height:'auto'}}/>
            <h2 style={{padding: '12px', justifyContent:'center', color: 'black'}}>Welcome back! Hungry?</h2>
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
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
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
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
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
                        Login
                    </button>
                </form>
            </div>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <p style={{ color: 'black' }}>Don't have an account?</p>
                    <Link 
                        to="/register-user" 
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            marginTop: '5px',
                            display: 'inline-block'
                        }}
                    >
                        Register here
                    </Link>
                </div>
        </div>
    );
}


export default LoginPage;
