export default function Notification({ message, onClose }) {
  if (!message) return null;

  return (
    <div style={{
      backgroundColor: '#d4edda',
      color: '#155724',
      padding: '10px 20px',
      margin: '20px auto',
      width: '80%',
      borderRadius: '5px',
      border: '1px solid #c3e6cb',
      textAlign: 'center',
      position: 'relative'
    }}>
      {message}
      <button onClick={onClose} style={{
        position: 'absolute',
        right: '10px',
        top: '5px',
        background: 'none',
        border: 'none',
        color: '#155724',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>×</button>
    </div>
  );
}
