import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ScheduleMeetingPage.module.css';

const ScheduleMeetingPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const services = [
    {
      id: 1,
      name: 'Web Development',
      duration: '30 min',
      description: 'Discuss your web development project requirements'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      duration: '30 min',
      description: 'Explore mobile app solutions for your business'
    },
    {
      id: 3,
      name: 'Software Development',
      duration: '30 min',
      description: 'Custom software development consultation'
    },
    {
      id: 4,
      name: 'Digital Marketing',
      duration: '30 min',
      description: 'Digital marketing strategy and planning'
    },
    {
      id: 5,
      name: 'IT Consulting',
      duration: '30 min',
      description: 'Technology consulting and advisory services'
    },
    {
      id: 6,
      name: 'ERP Solutions',
      duration: '30 min',
      description: 'Enterprise resource planning consultation'
    }
  ];

  const staffMembers = [
    { id: 1, name: 's Rai' },
    { id: 2, name: 'John Doe' },
    { id: 3, name: 'Jane Smith' }
  ];

  const timeSlots = [
    '7:00 PM', '7:30 PM', '8:00 PM',
    '8:30 PM', '9:00 PM', '9:30 PM',
    '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM'
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek };
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateClick = (day) => {
    const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(selected);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const isToday = (day) => {
    const today = new Date();
    return day === today.getDate() &&
           currentMonth.getMonth() === today.getMonth() &&
           currentMonth.getFullYear() === today.getFullYear();
  };

  const isPastDate = (day) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const checkDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return checkDate < today;
  };

  return (
    <div className={styles.schedulePage}>
      <div className={styles.container}>
        {!selectedService ? (
          // Service Selection View
          <div className={styles.serviceSelection}>
            <div className={styles.header}>
              <div className={styles.logoSection}>
                <img src="/images/bhoomi-black.png" alt="Bhoomi Techzone" className={styles.logo} />
              </div>
              <h1 className={styles.title}>Schedule a Meeting</h1>
              <p className={styles.subtitle}>Select a service to book your consultation</p>
            </div>

            <div className={styles.servicesGrid}>
              {services.map((service) => (
                <div
                  key={service.id}
                  className={styles.serviceCard}
                  onClick={() => handleServiceSelect(service)}
                >
                  <h3 className={styles.serviceName}>{service.name}</h3>
                  <p className={styles.serviceDuration}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#0e8d38" strokeWidth="2"/>
                      <path d="M12 6V12L16 14" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    {service.duration}
                  </p>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <button className={styles.selectBtn}>Select</button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Calendar and Time Selection View
          <div className={styles.bookingSection}>
            <button className={styles.backBtn} onClick={() => setSelectedService(null)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Services
            </button>

            <div className={styles.bookingHeader}>
              <div className={styles.logoSection}>
                <img src="/images/bhoomi-black.png" alt="Bhoomi Techzone" className={styles.logo} />
              </div>
              <h2 className={styles.selectedServiceName}>{selectedService.name}</h2>
              <p className={styles.selectedServiceDuration}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#0e8d38" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                {selectedService.duration}
              </p>
            </div>

            <div className={styles.bookingContent}>
              <div className={styles.leftSection}>
                {/* Staff Selection */}
                <div className={styles.staffSection}>
                  <label className={styles.sectionLabel}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#0e8d38" strokeWidth="2"/>
                      <circle cx="12" cy="7" r="4" stroke="#0e8d38" strokeWidth="2"/>
                    </svg>
                    SELECT STAFF <span className={styles.optional}>(OPTIONAL)</span>
                  </label>
                  <select
                    className={styles.staffSelect}
                    value={selectedStaff}
                    onChange={(e) => setSelectedStaff(e.target.value)}
                  >
                    <option value="">s Rai</option>
                    {staffMembers.map((staff) => (
                      <option key={staff.id} value={staff.name}>{staff.name}</option>
                    ))}
                  </select>
                </div>

                {selectedStaff && (
                  <div className={styles.selectedInfo}>
                    {monthNames[currentMonth.getMonth()]} {selectedDate ? selectedDate.getDate() : '26'} with {selectedStaff || 's Rai'}
                  </div>
                )}

                {/* Date Selection */}
                <div className={styles.dateSection}>
                  <label className={styles.sectionLabel}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="#0e8d38" strokeWidth="2"/>
                      <path d="M16 2v4M8 2v4M3 10h18" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    DATE
                  </label>
                  
                  <div className={styles.calendar}>
                    <div className={styles.calendarHeader}>
                      <button onClick={handlePrevMonth} className={styles.monthNav}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <span className={styles.monthYear}>
                        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                      </span>
                      <button onClick={handleNextMonth} className={styles.monthNav}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>

                    <div className={styles.calendarGrid}>
                      <div className={styles.dayHeader}>S</div>
                      <div className={styles.dayHeader}>M</div>
                      <div className={styles.dayHeader}>T</div>
                      <div className={styles.dayHeader}>W</div>
                      <div className={styles.dayHeader}>T</div>
                      <div className={styles.dayHeader}>F</div>
                      <div className={styles.dayHeader}>S</div>

                      {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                        <div key={`empty-${index}`} className={styles.emptyDay}></div>
                      ))}

                      {Array.from({ length: daysInMonth }).map((_, index) => {
                        const day = index + 1;
                        return (
                          <button
                            key={day}
                            className={`${styles.dayCell} ${
                              isToday(day) ? styles.today : ''
                            } ${
                              selectedDate && selectedDate.getDate() === day ? styles.selected : ''
                            } ${
                              isPastDate(day) ? styles.disabled : ''
                            }`}
                            onClick={() => !isPastDate(day) && handleDateClick(day)}
                            disabled={isPastDate(day)}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.rightSection}>
                {/* Time Selection */}
                <div className={styles.timeSection}>
                  <label className={styles.sectionLabel}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#0e8d38" strokeWidth="2"/>
                      <path d="M12 6V12L16 14" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    TIME
                  </label>

                  <div className={styles.timeSlots}>
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        className={`${styles.timeSlot} ${
                          selectedTime === time ? styles.selectedTime : ''
                        }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  <div className={styles.timezone}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#666" strokeWidth="2"/>
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#666" strokeWidth="2"/>
                    </svg>
                    All times are in (UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi
                  </div>
                </div>

                {selectedDate && selectedTime && (
                  <button className={styles.confirmBtn}>
                    Confirm Booking
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleMeetingPage;
