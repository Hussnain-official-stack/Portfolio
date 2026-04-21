document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('ageForm');
  const yearsOut = document.getElementById('calculatedyears');
  const monthsOut = document.getElementById('calculatedmonth');
  const daysOut = document.getElementById('calculateddays');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const day = Number(document.getElementById('day').value);
    const month = Number(document.getElementById('month').value);
    const year = Number(document.getElementById('year').value);

    const dateOfBirth = new Date(year, month - 1, day);
    const now = new Date();

    if (
      !day || !month || !year ||
      dateOfBirth > now ||
      dateOfBirth.getFullYear() !== year ||
      dateOfBirth.getMonth() !== month - 1 ||
      dateOfBirth.getDate() !== day
    ) {
      alert('Please enter a valid date of birth.');
      return;
    }

    let years = now.getFullYear() - dateOfBirth.getFullYear();
    let months = now.getMonth() - dateOfBirth.getMonth();
    let days = now.getDate() - dateOfBirth.getDate();

    if (days < 0) {
      const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += previousMonth.getDate();
      months -= 1;
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    yearsOut.textContent = years;
    monthsOut.textContent = months;
    daysOut.textContent = days;
  });
});
