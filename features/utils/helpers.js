// features/utils/helpers.js

export function getDateSelector(date) {

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  let side; // left or right
  if (date.getMonth() === currentMonth && date.getFullYear() === currentYear) {
    side = 'left';
  } else if (date.getMonth() === ((currentMonth + 1) % 12) && date.getFullYear() === (currentMonth === 11 ? currentYear + 1 : currentYear)) {
    side = 'right';
  } else {
    throw new Error('Date must be in the current month or the next month.');
  }

  // Get the first day of the month
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  // Calculate the displacement for the start of the month
  const startDisplacement = firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;
  // Calculate the week number for the date
  const weekOffset = Math.floor((date.getDate() + startDisplacement - 1) / 7);
  const row = weekOffset + 2; // As the rows are numbered from 2 to 6

  // Day of week: JS Sunday is 0, but we need Monday to be 1 and Sunday to be 7
  let col = date.getDay();
  col = col === 0 ? 7 : col; // If col is 0 (Sunday), set it to 7

  return $(`#buscador-selector-oficina > div.row.selector-calendario > div.col-xs-12.calendar-direction > div.nombre-meses-dias-${side} > div.dias-meses > div > div > div:nth-child(${row}) > div:nth-child(${col}) > div`);
}
