import { useEffect, useState } from "react";
import { getBookings } from "../api/bookingsApi";

function Dashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings()
      .then(setBookings)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Bookings</h1>

      {bookings.map((booking) => (
        <div key={booking.id}>
          <h3>{booking.customer}</h3>
          <p>{booking.destination}</p>
          <p>{booking.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;