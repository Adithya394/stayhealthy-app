import { useState } from 'react';

const doctors = [
  { name: "Dr. Smith", specialty: "Cardiology" },
  { name: "Dr. Patel", specialty: "Neurology" },
  { name: "Dr. Gupta", specialty: "Dermatology" },
  { name: "Dr. Sharma", specialty: "Cardiology" },
];

export default function FindDoctorSearch() {
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter((doc) =>
    doc.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Find a Doctor</h2>
      <input
        type="text"
        placeholder="Search by specialty"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
      />
      <ul>
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc, index) => (
            <li key={index}>
              {doc.name} - <strong>{doc.specialty}</strong>
            </li>
          ))
        ) : (
          <li>No doctors found.</li>
        )}
      </ul>
    </div>
  );
}
