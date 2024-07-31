import Font from "./Font";

const fonts = ["--f-kumbh", "--f-roboto", "--f-space"];

const Fonts = () => {
  return (
    <div className="flex items-center justify-between">
      <h4>Fonts</h4>
      <ul className="flex gap-4">
        {fonts.map((font) => (
          <Font key={font} font={font} />
        ))}
      </ul>
    </div>
  );
};

export default Fonts;
