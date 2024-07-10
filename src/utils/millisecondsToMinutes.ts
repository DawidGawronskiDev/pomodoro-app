const millisecondsToMinutes = (totalDuration: number) => {
  if (totalDuration < 0 || isNaN(totalDuration)) {
    return 1;
  }

  const durationInMinutes = totalDuration / 1000 / 60;
  const formattedDuration = durationInMinutes.toFixed();
  return formattedDuration;
};

export default millisecondsToMinutes;
