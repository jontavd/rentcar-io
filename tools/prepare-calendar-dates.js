const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

const generateDateRange = (start, minDays, maxDays) => {
  const dateRanges = [];
  for (let i = minDays; i <= maxDays; i++) {
    const end = new Date(start);
    end.setDate(end.getDate() + i);
    dateRanges.push([start, end]);
  }
  return dateRanges;
};

const generateDates = (startInFuture, minDaysRange, maxDaysRange, freezeDaysPickup = [], freezeDaysDropoff = [], onlyWeekendsPickup = false, onlyWeekendsDropoff = false) => {
  const dates = [];
  const today = new Date();
  const startDay = new Date(today);
  const endDay = new Date(today.getFullYear(), today.getMonth() + 2, 1);
  endDay.setDate(endDay.getDate() - 1);

  startDay.setDate(startDay.getDate() + startInFuture);

  for (let d = startDay; d <= endDay; d.setDate(d.getDate() + 1)) {
    // If freezeDaysPickup array is not empty and date is not in the array, skip the date
    if(freezeDaysPickup.length > 0 && !freezeDaysPickup.includes(formatDate(new Date(d)))){
      continue;
    }
    // If onlyWeekendsPickup is true, skip the date if it is not a weekend
    if(onlyWeekendsPickup && (d.getDay() !== 0 && d.getDay() !== 6)){
      continue;
    }

    const ranges = generateDateRange(new Date(d), minDaysRange, maxDaysRange)
      .filter(([_, end]) => end < new Date(endDay.getTime() + 86400000))  // Ensure drop-off is within the month
      .filter(([_, end]) => !(onlyWeekendsDropoff && (end.getDay() !== 0 && end.getDay() !== 6)))  // If onlyWeekendsDropoff is true, filter out ranges where dropoff date is not a weekend
      .filter(([_, end]) => freezeDaysDropoff.length === 0 || freezeDaysDropoff.includes(formatDate(end)));  // If freezeDaysDropoff array is not empty, filter out ranges where dropoff date is not in the array

    dates.push(...ranges);
  }
  return dates;
};

// Specify your freeze days for pickup and dropoff here
const freezeDaysPickup = [];
const freezeDaysDropoff = [];
const onlyWeekendsPickup = false;
const onlyWeekendsDropoff = false;

const dates = generateDates(3, 7, 28, freezeDaysPickup, freezeDaysDropoff, onlyWeekendsPickup, onlyWeekendsDropoff);

// Print the table header
console.log('| pickupDate | dropoffDate |');

// Print each date range in the table
dates.forEach(([pickup, dropoff]) => {
  console.log(`| ${formatDate(pickup)} | ${formatDate(dropoff)} |`);
});
