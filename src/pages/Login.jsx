import { useState } from 'react';
import Notification from './components/Notification';

function App() {
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    // Simulate login success
    setMessage('Login successful!');
  };

  return (
    <div>
      <Notification message={message} onClose={() => setMessage('')} />
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
