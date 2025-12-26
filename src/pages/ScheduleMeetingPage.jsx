import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ScheduleMeetingPage.module.css';

const ScheduleMeetingPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    specialRequests: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConfirmBooking = () => {
    console.log('Booking Details:', {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      ...formData
    });
    // Add booking logic here
  };

  const services = [
    {
      id: 1,
      name: 'Web Development',
      duration: '30 min'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      duration: '30 min'
    },
    {
      id: 3,
      name: 'Software Development',
      duration: '30 min'
    },
    {
      id: 4,
      name: 'Website Design',
      duration: '30 min'
    },
    {
      id: 5,
      name: 'Digital Marketing',
      duration: '30 min'
    },
    {
      id: 6,
      name: 'Social Media Marketing',
      duration: '30 min'
    },
    {
      id: 7,
      name: 'Content Marketing',
      duration: '30 min'
    },
    {
      id: 8,
      name: 'SEO Optimization',
      duration: '30 min'
    },
    {
      id: 9,
      name: 'CRM Software',
      duration: '30 min'
    },
    {
      id: 10,
      name: 'HRMS System',
      duration: '30 min'
    },
    {
      id: 11,
      name: 'LMS Software',
      duration: '30 min'
    },
    {
      id: 12,
      name: 'Ecommerce Platforms',
      duration: '30 min'
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
        {/* Service Selection View - Always visible */}
        <div className={styles.serviceSelection}>
          <div className={styles.header}>
            <div className={styles.logoSection}>
              <img src="/images/bhoomi-black.png" alt="Bhoomi Techzone" className={styles.logo} />
            </div>
            <h1 className={styles.title}>Bhoomi Techzone Services</h1>
            <p className={styles.subtitle}>Select a service to book your consultation</p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <div
                key={service.id}
                className={`${styles.serviceCard} ${selectedService?.id === service.id ? styles.activeCard : ''}`}
                onClick={() => handleServiceSelect(service)}
              >
                <div className={styles.serviceHeader}>
                  <h3 className={styles.serviceName}>{service.name}</h3>
                  <div className={`${styles.circleCheck} ${selectedService?.id === service.id ? styles.activeCheck : ''}`}></div>
                </div>
                <p className={styles.serviceDuration}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  {service.duration}
                </p>
              </div>
            ))}
          </div>

          {/* Calendar and Time Selection - Always visible but inactive initially */}
          <div className={styles.bookingArea}>
            <p className={styles.bookingMessage}>
              {!selectedService 
                ? 'Select a service to see available dates and times'
                : 'Select a date and time for your appointment'}
            </p>

            <div className={`${styles.bookingContent} ${!selectedService ? styles.inactive : ''}`}>
              {/* Staff Selection */}
              <div className={styles.staffSection}>
                <label className={styles.sectionLabel}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  SELECT STAFF <span className={styles.optional}>(OPTIONAL)</span>
                </label>
                <select
                  className={styles.staffSelect}
                  value={selectedStaff}
                  onChange={(e) => setSelectedStaff(e.target.value)}
                  disabled={!selectedService}
                >
                  <option value="">Anyone</option>
                  {staffMembers.map((staff) => (
                    <option key={staff.id} value={staff.name}>{staff.name}</option>
                  ))}
                </select>
              </div>

              <div className={styles.dateTimeSection}>
                {/* Date Selection */}
                <div className={styles.dateColumn}>
                  <label className={styles.sectionLabel}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2"/>
                      <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round"/>
                    </svg>
                    DATE
                  </label>
                  
                  <div className={styles.calendar}>
                    <div className={styles.calendarHeader}>
                      <button onClick={handlePrevMonth} className={styles.monthNav} disabled={!selectedService}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <span className={styles.monthYear}>
                        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                      </span>
                      <button onClick={handleNextMonth} className={styles.monthNav} disabled={!selectedService}>
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
                        const isSelected = selectedDate && selectedDate.getDate() === day;
                        const isTodayDate = isToday(day);
                        return (
                          <button
                            key={day}
                            className={`${styles.dayCell} ${
                              !isSelected && isTodayDate ? styles.today : ''
                            } ${
                              isSelected ? styles.selected : ''
                            } ${
                              isPastDate(day) || !selectedService ? styles.disabled : ''
                            }`}
                            onClick={() => selectedService && !isPastDate(day) && handleDateClick(day)}
                            disabled={isPastDate(day) || !selectedService}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Time Selection */}
                <div className={styles.timeColumn}>
                  <label className={styles.sectionLabel}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6V12L16 14" strokeLinecap="round"/>
                    </svg>
                    TIME
                  </label>

                  {!selectedService ? (
                    <div className={styles.timeEmptyState}>
                      <p>Select a service and date to see available times.</p>
                    </div>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* User Details Form - Always visible but inactive initially */}
            <div className={styles.formSection}>
              <h3 className={styles.formTitle}>Add Your Details</h3>
              
              <div className={`${styles.formGrid} ${!selectedService ? styles.inactive : ''}`}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className={styles.formInput}
                    placeholder="Enter your full name"
                    required
                    disabled={!selectedService}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className={styles.formInput}
                    placeholder="Enter your email"
                    required
                    disabled={!selectedService}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Mobile Number *</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleFormChange}
                    className={styles.formInput}
                    placeholder="Enter your mobile number"
                    required
                    disabled={!selectedService}
                  />
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.formLabel}>Any Special Requests</label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleFormChange}
                    className={styles.formTextarea}
                    placeholder="Tell us anything special you'd like us to know..."
                    rows="4"
                    disabled={!selectedService}
                  />
                </div>
              </div>

              <button 
                className={styles.confirmBtn}
                onClick={handleConfirmBooking}
                disabled={
                  !selectedService || 
                  !selectedDate || 
                  !selectedTime || 
                  !formData.name.trim() || 
                  !formData.email.trim() || 
                  !formData.mobile.trim()
                }
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMeetingPage;
