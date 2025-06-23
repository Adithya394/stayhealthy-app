import { useState } from 'react';

export default function InstantConsultation() {
  const [requested, setRequested] = useState(false);

  const handleRequest = () => {
    setRequested(true);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Instant Consultation</h2>
      {!requested ? (
        <button onClick={handleRequest} style={{ padding: '10px 20px' }}>
          Request Consultation
        </button>
      ) : (
        <p style={{ color: 'green', fontWeight: 'bold' }}>
          ✅ Your consultation request has been received!
        </p>
      )}
    </div>
  );
}
