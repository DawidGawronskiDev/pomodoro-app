const formatTimer = (ms: number) => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);

  const addZero = (n: number) => {
    return n.toString().length === 1 ? 0 + n.toString() : n;
  };

  return `${addZero(minutes)}:${addZero(seconds)}`;
};

export default formatTimer;
