import "./index.css";
import { useState } from "react";
const ReservationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState(1);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !date || !time) {
      setMessage("Please fill all fields.");
      return;
    }

    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, date, time, people }),
      };
      const apiUrl = "http://localhost:5000/reservations";

      const response = await fetch(apiUrl, options);

      const data = await response.json()

      if (response.ok) {
        setMessage(data.message);
        setName("");
        setEmail("");
        setDate("");
        setTime("");
        setPeople(1);
      }
    } catch (error) {
      setMessage(`${error.message}`);
    }
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
