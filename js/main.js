const outputDaysEl = document.getElementById('output-days');
const outputHoursEl = document.getElementById('output-hours');
const outputMinutesEl = document.getElementById('output-minutes');
const outputSecondsEl = document.getElementById('output-seconds');

// # Funzione che genera un oggetto rappresentante il tempo fra due date
const timesBetweenDates = (fromDate, toDate) => {
  // recupero i ms dagli oggetti "Date"
  const msFromDate = fromDate.getTime();
  const msToDate = toDate.getTime();

  // Differenza fra i due momenti
  const msBetweenDates = msToDate - msFromDate;

  // Recupero i ms per il calcolo
  const msPerSecond = 1000;
  const msPerMinute = msPerSecond * 60;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;

  // Traduzione in singoli valori temporali
  const days = Math.floor(msBetweenDates / msPerDay);
  const hours = Math.floor((msBetweenDates % msPerDay) / msPerHour);
  const minutes = Math.floor((msBetweenDates % msPerHour) / msPerMinute);
  const seconds = Math.floor((msBetweenDates % msPerMinute) / msPerSecond);

  // Genero un oggetto contenente il tempo tra le date e lo do in output
  return { days, hours, minutes, seconds };
};

// # Funzione aggiorna l'interfaccia
const updateClockInterface = (days, hours, minutes, seconds) => {
  outputDaysEl.innerText = `${days}`.padStart(2, '0');
  outputHoursEl.innerText = `${hours}`.padStart(2, '0');
  outputMinutesEl.innerText = `${minutes}`.padStart(2, '0');
  outputSecondsEl.innerText = `${seconds}`.padStart(2, '0');
};

// # Funzione che gestisce l'avanzamento del countdown
const countdownHandler = () => {
  // Recupero i due momenti di interesse
  const now = new Date();
  const midnight = new Date('2024-10-26 00:00:00');

  // Creo 4 costanti contenenti la differenza di tempo tra i due momenti di interesse
  const { days, hours, minutes, seconds } = timesBetweenDates(now, midnight);

  // Aggiorno l'interfaccia
  updateClockInterface(days, hours, minutes, seconds);
};

// Lego il countdown handler all'intervallo per eseguirlo ogni secondo
const clockInterval = setInterval(countdownHandler, 1000);

// Eseguo il countdown handler al caricamento della pagina
countdownHandler();
