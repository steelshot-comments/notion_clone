import React, { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import 'react-calendar/dist/Calendar.css';

Modal.setAppElement('#__next');

function CalendarView() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const eventNameRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddEvent = () => {
    const eventName = eventNameRef.current.value;
    if (!eventName) return;

    const newEvent = {
      date: selectedDate,
      name: eventName,
    };

    setEvents([...events, newEvent]);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const eventDates = events.map((event) => event.date.toDateString());

  useEffect(() => {
    // Render the calendar view
  }, []);

  return (
    <>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileClassName={({ date }) =>
          eventDates.includes(date.toDateString()) ? 'has-event' : null
        }
        onClickDay={handleOpenModal}
      />
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <h2>Add Event</h2>
        <div>
          <label htmlFor="event-name">Event Name:</label>
          <input type="text" id="event-name" ref={eventNameRef} />
        </div>
        <button onClick={handleAddEvent}>Add</button>
        <button onClick={handleCloseModal}>Cancel</button>
      </Modal>
    </>
  );
}

export default CalendarView;
