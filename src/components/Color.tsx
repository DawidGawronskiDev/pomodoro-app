type ColorProps = {
  color: string;
};

const Color = ({ color }: ColorProps) => {
  const handleColorChange = (color: string) => {
    document.documentElement.style.setProperty("--c-main", color);
  };

  return (
    <li>
      <button
        type="button"
        style={{ backgroundColor: color }}
        onClick={() => handleColorChange(color)}
        className="w-10 aspect-square rounded-full"
      ></button>
    </li>
  );
};

export default Color;
