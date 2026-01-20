import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ScheduleMeetingPage.module.css';

const ScheduleMeetingPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [clientPreferences, setClientPreferences] = useState({});
  const [suggestedTimes, setSuggestedTimes] = useState([]);

  // Configuration data
  const holidays = ['2026-01-26', '2026-03-08', '2026-08-15', '2026-12-25'];
  
  const staffUnavailableDates = {
    'Rishabh Savita': ['2026-01-25', '2026-01-26', '2026-02-15'],
    'Surya Pratap': ['2026-01-22', '2026-02-10'],
    'Anurag Solanki': ['2026-01-28', '2026-02-05'],
    'Faizal Rizvi': ['2026-01-30', '2026-02-12']
  };

  const maxBookingsPerDay = 3;
  const maxBookingsPerClient = 10;
  const minAdvanceHours = 2;
  const maxAdvanceDays = 30;

  // Load data from localStorage on component mount
  React.useEffect(() => {
    const savedBookings = localStorage.getItem('bhoomitechBookedSlots');
    const savedPreferences = localStorage.getItem('bhoomitechClientPreferences');
    
    if (savedBookings) {
      setBookedSlots(JSON.parse(savedBookings));
    }
    if (savedPreferences) {
      setClientPreferences(JSON.parse(savedPreferences));
    }
    
    // Auto-cleanup old bookings
    cleanupOldBookings();
  }, []);
  
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

    // Auto-suggest based on client email
    if (name === 'email' && value && clientPreferences[value]) {
      const prefs = clientPreferences[value];
      if (prefs.preferredStaff && !selectedStaff) {
        setSelectedStaff(prefs.preferredStaff);
      }
    }
  };

  // Auto-cleanup old bookings
  const cleanupOldBookings = () => {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - 30);
    
    const filteredBookings = bookedSlots.filter(booking => 
      new Date(booking.bookedAt) > cutoffDate
    );
    
    if (filteredBookings.length !== bookedSlots.length) {
      setBookedSlots(filteredBookings);
      localStorage.setItem('bhoomitechBookedSlots', JSON.stringify(filteredBookings));
    }
  };

  // Get service-specific time slots
  const getTimeSlotsForService = (service, date) => {
    if (!service || !date) return [];
    
    const day = date.getDay();
    const isWeekend = day === 0 || day === 6;
    
    if (isWeekend) {
      // Weekend hours: 10 AM to 4 PM (every 30 minutes) - All services available
      // Excluding lunch time 2:00 PM to 3:00 PM
      return [
        '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
        '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
        '3:00 PM', '3:30 PM', '4:00 PM'
      ];
    }
    
    // Weekday slots: 9 AM to 6 PM (every 30 minutes)
    // Excluding lunch time 2:00 PM to 3:00 PM
    return [
      '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
      '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
      '1:00 PM', '1:30 PM', '3:00 PM', '3:30 PM',
      '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'
    ];
  };

  // Check if date is holiday
  const isHoliday = (date) => {
    const dateString = date.toISOString().split('T')[0];
    return holidays.includes(dateString);
  };

  // Check if staff is available on date
  const isStaffAvailable = (staff, date) => {
    if (!staff || staff === 'Anyone') return true;
    
    const dateString = date.toISOString().split('T')[0];
    const unavailableDates = staffUnavailableDates[staff] || [];
    return !unavailableDates.includes(dateString);
  };

  // Check booking limits
  const canClientBook = (email, date) => {
    const clientBookings = bookedSlots.filter(booking => 
      booking.details.clientEmail === email
    );
    
    const todayBookings = bookedSlots.filter(booking => 
      booking.date === date.toDateString() && booking.details.clientEmail === email
    );

    return clientBookings.length < maxBookingsPerClient && 
           todayBookings.length < maxBookingsPerDay;
  };

  // Check advance booking limits
  const isValidBookingDate = (date) => {
    const now = new Date();
    const diffHours = (date - now) / (1000 * 60 * 60);
    const diffDays = (date - now) / (1000 * 60 * 60 * 24);
    
    return diffHours >= minAdvanceHours && diffDays <= maxAdvanceDays;
  };

  // Get alternative time suggestions
  const getAlternativeTimes = (date, service) => {
    if (!date || !service) return [];
    
    const availableSlots = getTimeSlotsForService(service, date).filter(time => 
      !isSlotBooked(date, time)
    );
    
    if (availableSlots.length > 0) {
      return availableSlots.slice(0, 3);
    }
    
    // Check next 3 days for alternatives
    const alternatives = [];
    for (let i = 1; i <= 3 && alternatives.length < 3; i++) {
      const nextDate = new Date(date);
      nextDate.setDate(date.getDate() + i);
      
      if (!isHoliday(nextDate) && isValidBookingDate(nextDate)) {
        const nextDaySlots = getTimeSlotsForService(service, nextDate).filter(time => 
          !isSlotBooked(nextDate, time)
        );
        if (nextDaySlots.length > 0) {
          alternatives.push({
            date: nextDate,
            time: nextDaySlots[0]
          });
        }
      }
    }
    
    return alternatives;
  };

  // Check if a specific date-time slot is already booked for selected staff
  const isSlotBooked = (date, time) => {
    if (!date || !time) return false;
    const dateString = date.toDateString();
    
    return bookedSlots.some(booking => {
      const isSameDateAndTime = booking.date === dateString && booking.time === time;
      
      if (!isSameDateAndTime) return false;
      
      // If no staff is selected (Anyone), check if slot is booked for any staff
      if (!selectedStaff) {
        return true;
      }
      
      // If specific staff is selected, only show as booked if it's booked for that staff
      // or if the previous booking was made with "Anyone" (which blocks for all staff)
      return booking.staff === selectedStaff || booking.staff === 'Anyone';
    });
  };

  // Save a new booking to localStorage
  const saveBooking = (date, time, details) => {
    const newBooking = {
      id: Date.now().toString(),
      date: date.toDateString(),
      time: time,
      staff: selectedStaff || 'Anyone',
      details: details,
      bookedAt: new Date().toISOString(),
      status: 'confirmed'
    };
    const updatedBookings = [...bookedSlots, newBooking];
    setBookedSlots(updatedBookings);
    localStorage.setItem('bhoomitechBookedSlots', JSON.stringify(updatedBookings));
    
    // Save client preferences
    saveClientPreferences(details.clientEmail, {
      preferredStaff: selectedStaff || 'Anyone',
      lastBookedService: selectedService.name,
      preferredTimes: [time],
      bookingHistory: [...(clientPreferences[details.clientEmail]?.bookingHistory || []), newBooking.id]
    });
  };

  // Save client preferences
  const saveClientPreferences = (email, prefs) => {
    const updatedPrefs = {
      ...clientPreferences,
      [email]: {
        ...clientPreferences[email],
        ...prefs,
        lastUpdated: new Date().toISOString()
      }
    };
    setClientPreferences(updatedPrefs);
    localStorage.setItem('bhoomitechClientPreferences', JSON.stringify(updatedPrefs));
  };

  // Get optimal staff suggestion
  const getOptimalStaff = (date, service) => {
    const availableStaff = staffMembers.filter(staff => 
      isStaffAvailable(staff.name, date)
    );
    
    if (availableStaff.length === 0) return null;
    
    // Find staff with least bookings on that day
    const staffWorkload = availableStaff.map(staff => ({
      ...staff,
      dayBookings: bookedSlots.filter(booking => 
        booking.date === date.toDateString() && booking.staff === staff.name
      ).length
    }));
    
    staffWorkload.sort((a, b) => a.dayBookings - b.dayBookings);
    return staffWorkload[0];
  };

  const handleConfirmBooking = async () => {
    setIsSubmitting(true);

    try {
      // Enhanced validation
      if (!selectedService || !selectedDate || !selectedTime || !formData.name.trim() || !formData.email.trim() || !formData.mobile.trim()) {
        alert('Please fill all required fields and select service, date, and time');
        setIsSubmitting(false);
        return;
      }

      // Check if date is valid for booking
      if (!isValidBookingDate(selectedDate)) {
        alert(`Booking must be at least ${minAdvanceHours} hours in advance and not more than ${maxAdvanceDays} days ahead.`);
        setIsSubmitting(false);
        return;
      }

      // Check if date is holiday
      if (isHoliday(selectedDate)) {
        alert('Selected date is a holiday. Please choose another date.');
        setIsSubmitting(false);
        return;
      }

      // Check client booking limits
      if (!canClientBook(formData.email, selectedDate)) {
        alert(`You have reached the booking limit. Max ${maxBookingsPerClient} total bookings or ${maxBookingsPerDay} bookings per day.`);
        setIsSubmitting(false);
        return;
      }

      // Check staff availability
      if (selectedStaff && !isStaffAvailable(selectedStaff, selectedDate)) {
        alert(`${selectedStaff} is not available on selected date. Please choose another staff member or date.`);
        setIsSubmitting(false);
        return;
      }

      // Check if slot is still available (race condition protection)
      if (isSlotBooked(selectedDate, selectedTime)) {
        const alternatives = getAlternativeTimes(selectedDate, selectedService);
        let alertMessage = 'Selected time slot is no longer available.';
        
        if (alternatives.length > 0) {
          alertMessage += '\n\nSuggested alternatives:\n';
          alternatives.forEach((alt, index) => {
            if (alt.date) {
              alertMessage += `${index + 1}. ${alt.date.toDateString()} at ${alt.time}\n`;
            } else {
              alertMessage += `${index + 1}. ${alt}\n`;
            }
          });
        }
        
        alert(alertMessage);
        setIsSubmitting(false);
        return;
      }

      // Format date for display
      const formattedDate = selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      // Create enhanced WhatsApp message
      const message = `🗓️ NEW MEETING BOOKING

📋 Service: ${selectedService.name}
⏱️ Duration: ${selectedService.duration}
👤 Staff: ${selectedStaff || 'Anyone'}
📅 Date: ${formattedDate}
🕐 Time: ${selectedTime}

👨‍💼 Client Details:
📛 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Mobile: ${formData.mobile}
${formData.specialRequests ? `📝 Special Requests: ${formData.specialRequests}` : ''}

📱 Booking ID: ${Date.now()}
🌐 Source: Bhoomi TechZone Schedule Meeting
⏰ Booked at: ${new Date().toLocaleString()}`;

      // WhatsApp number
      const whatsappNumber = '918130787194';
      
      // Create WhatsApp URL
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      
      // Save the booking
      saveBooking(selectedDate, selectedTime, {
        service: selectedService.name,
        clientName: formData.name,
        clientEmail: formData.email,
        clientMobile: formData.mobile,
        specialRequests: formData.specialRequests
      });
      
      // Open WhatsApp
      window.open(whatsappURL, '_blank');
      
      // Reset form and selections
      setSelectedService(null);
      setSelectedStaff('');
      setSelectedDate(null);
      setSelectedTime(null);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        specialRequests: ''
      });
      setSuggestedTimes([]);
      
      // Show success message with booking ID
      alert(`✅ Booking confirmed!

Booking ID: ${Date.now()}

You will receive confirmation on WhatsApp shortly. Keep this booking ID for future reference.`);
      
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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

  const timeSlots = selectedService ? getTimeSlotsForService(selectedService, selectedDate) : [];

  const staffMembers = [
    { id: 1, name: 'Rishabh Savita' },
    { id: 2, name: 'Surya Pratap' },
    { id: 3, name: 'Anurag Solanki' },
    { id: 4, name: 'Faizal Rizvi' }
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
    return checkDate < today || isHoliday(checkDate);
  };

  const handleDateClick = (day) => {
    const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    
    if (isHoliday(selected)) {
      alert('Selected date is a holiday. Please choose another date.');
      return;
    }
    
    if (!isValidBookingDate(selected)) {
      alert(`Please select a date at least ${minAdvanceHours} hours in advance and not more than ${maxAdvanceDays} days ahead.`);
      return;
    }
    
    setSelectedDate(selected);
    setSelectedTime(null); // Reset time when date changes
    
    // Show suggested times if available
    const suggestions = getAlternativeTimes(selected, selectedService);
    setSuggestedTimes(suggestions);
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
                  {selectedDate && (
                    <span className={styles.staffAvailability}>
                      {getOptimalStaff(selectedDate, selectedService) && 
                        ` • Suggested: ${getOptimalStaff(selectedDate, selectedService).name}`}
                    </span>
                  )}
                </label>
                <select
                  className={styles.staffSelect}
                  value={selectedStaff}
                  onChange={(e) => {
                    setSelectedStaff(e.target.value);
                    setSelectedTime(null); // Reset time when staff changes
                  }}
                  disabled={!selectedService}
                >
                  <option value="">Anyone</option>
                  {staffMembers.map((staff) => {
                    const isAvailable = !selectedDate || isStaffAvailable(staff.name, selectedDate);
                    return (
                      <option 
                        key={staff.id} 
                        value={staff.name}
                        disabled={!isAvailable}
                      >
                        {staff.name} {!isAvailable ? '(Unavailable)' : ''}
                      </option>
                    );
                  })}
                </select>
                
                {/* Staff unavailable notice */}
                {selectedStaff && selectedDate && !isStaffAvailable(selectedStaff, selectedDate) && (
                  <div className={styles.unavailableNotice}>
                    ⚠️ {selectedStaff} is not available on this date. Please choose another date or staff member.
                  </div>
                )}
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
                  ) : !selectedDate ? (
                    <div className={styles.timeEmptyState}>
                      <p>Please select a date first.</p>
                    </div>
                  ) : timeSlots.length === 0 ? (
                    <div className={styles.timeEmptyState}>
                      <p>No available time slots for this service on weekends.</p>
                    </div>
                  ) : (
                    <>
                      <div className={styles.timeSlots}>
                        {timeSlots.map((time) => {
                          const isBooked = selectedDate && isSlotBooked(selectedDate, time);
                          const bookingForSlot = selectedDate ? bookedSlots.find(booking => 
                            booking.date === selectedDate.toDateString() && 
                            booking.time === time &&
                            (booking.staff === selectedStaff || booking.staff === 'Anyone' || !selectedStaff)
                          ) : null;
                          
                          return (
                            <button
                              key={time}
                              className={`${styles.timeSlot} ${
                                selectedTime === time ? styles.selectedTime : ''
                              } ${isBooked ? styles.bookedSlot : ''}`}
                              onClick={() => !isBooked && setSelectedTime(time)}
                              disabled={isBooked}
                              title={isBooked ? `This slot is booked${bookingForSlot ? ` for ${bookingForSlot.staff}` : ''}` : ''}
                            >
                              {time}
                              {isBooked && (
                                <span className={styles.bookedLabel}>
                                  {bookingForSlot ? `Booked (${bookingForSlot.staff})` : 'Booked'}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                      
                      {/* Alternative suggestions */}
                      {selectedDate && timeSlots.every(time => isSlotBooked(selectedDate, time)) && (
                        <div className={styles.alternativeSuggestions}>
                          <p>All slots are booked for this day. Try these alternatives:</p>
                          {getAlternativeTimes(selectedDate, selectedService).map((alt, index) => (
                            <button 
                              key={index} 
                              className={styles.alternativeSlot}
                              onClick={() => {
                                if (alt.date) {
                                  setSelectedDate(alt.date);
                                  setSelectedTime(alt.time);
                                  setCurrentMonth(alt.date);
                                }
                              }}
                            >
                              {alt.date ? `${alt.date.toDateString()} at ${alt.time}` : alt}
                            </button>
                          ))}
                        </div>
                      )}
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
                  isSubmitting ||
                  !selectedService || 
                  !selectedDate || 
                  !selectedTime || 
                  !formData.name.trim() || 
                  !formData.email.trim() || 
                  !formData.mobile.trim()
                }
              >
                {isSubmitting ? 'Booking...' : 'Confirm Booking'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMeetingPage;
