type FontProps = {
  font: string;
};

const Font = ({ font }: FontProps) => {
  const handleFontChange = (font: string) => {
    document.documentElement.style.setProperty("--f-main", `var(${font})`);
  };

  console.log(
    getComputedStyle(document.documentElement)
      .getPropertyValue(`var(${font})`)
      .trim()
  );

  return (
    <li>
      <button
        type="button"
        style={{
          fontFamily: `var(${font})`,
        }}
        onClick={() => handleFontChange(font)}
        className="w-10 aspect-square rounded-full font-bold"
      >
        Aa
      </button>
    </li>
  );
};

export default Font;
