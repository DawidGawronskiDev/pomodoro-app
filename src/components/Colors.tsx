import Color from "./Color";

const colors = ["var(--c-100)", "var(--c-200)", "var(--c-300)"];

const Colors = () => {
  return (
    <div className="flex items-center justify-between">
      <h4>Color</h4>
      <ul className="flex gap-4">
        {colors.map((color) => (
          <Color key={color} color={color} />
        ))}
      </ul>
    </div>
  );
};

export default Colors;
