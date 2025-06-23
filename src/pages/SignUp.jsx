import { useState } from 'react';
import Notification from '../components/Notification'; // ✅ adjust path if needed

export default function SignUp() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.password) {
      setLoggedIn(true);
      setMessage(`Welcome, ${form.name}! You are now logged in.`);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setForm({ name: '', email: '', password: '' });
    setMessage('You have been logged out.');
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <Notification message={message} onClose={() => setMessage('')} />
      {loggedIn ? (
        <div>
          <h2>Welcome, {form.name}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <br />
            <button type="submit">Sign Up</button>
          </form>
        </>
      )}
    </div>
  );
}
