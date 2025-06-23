import { useState } from 'react';

export default function Profile() {
  const [name, setName] = useState('John Doe');
  const [editing, setEditing] = useState(false);
  const [tempName, setTempName] = useState(name);

  const handleSave = () => {
    setName(tempName);
    setEditing(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Profile Details</h2>
      {editing ? (
        <>
          <input
            type="text"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p><strong>Name:</strong> {name}</p>
          <button onClick={() => setEditing(true)}>Edit Name</button>
        </>
      )}
    </div>
  );
}
