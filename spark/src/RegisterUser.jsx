import { useState } from 'react';

const RegisterUser = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        city: '',
        age: '',
        favoriteFood: ''
    });
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/register_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData)
            });

            if (response.ok) {
                navigate('/swipe');
                console.log("Login successful");
            } else {
                const data = await response.text();
                setError(data || 'Registration failed');
            }
        } catch (err) {
            setError('Failed to connect to server');
            console.error('Error:', err);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
                <h2 className="text-center text-3xl font-bold">Register User Account</h2>
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
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                value={formData.password}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    password: e.target.value
                                })}
                            />
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                City
                            </label>
                            <input
                                id="city"
                                type="city"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                value={formData.city}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    city: e.target.value
                                })}
                            />
                        </div>
                        <div>
                            <label htmlFor="age" className="block text-sm font-medium text-gray-700" type="number" min="12" max="100">
                                Age
                            </label>
                            <input
                                id="age"
                                type="age"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                value={formData.age}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    age: e.target.value
                                })}
                            />
                        </div>
                        <div>
                            <label htmlFor="favoriteFood" className="block text-sm font-medium text-gray-700">
                                Favorite Food
                            </label>
                            <input
                                id="favoriteFood"
                                type="favoriteFood"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                value={formData.favoriteFood}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    favoriteFood: e.target.value
                                })}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterUser;