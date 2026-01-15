import "./index.css";
import {useState} from 'react'
const ReservationForm = ({ onReserve }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState(1);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !date || !time) {
      setMessage("Please fill all fields.");
      return;
    }

    // Call a parent callback (optional)
    if (onReserve) {
      onReserve({ name, email, date, time, people });
    }

    setMessage("Reservation submitted!");
    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setPeople(1);
  };

  return (
    <section className="reservation-section">
      <h2>Make a Reservation</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="reservation-form">
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </label>

        <label>
          Date
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label>
          Time
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>

        <label>
          People
          <input
            type="number"
            value={people}
            min="1"
            onChange={(e) => setPeople(e.target.value)}
          />
        </label>

        <button type="submit">Reserve</button>
      </form>
    </section>
  );
};

export default ReservationForm;
