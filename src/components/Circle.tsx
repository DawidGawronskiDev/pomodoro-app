import clsx from "clsx";

type CircleProps = {
  size: number;
  stroke: number;
  percentage: number;
  isRunning: boolean;
  color: string;
};

export default function Circle({
  size,
  stroke,
  percentage,
  isRunning,
  color,
}: CircleProps) {
  const radius = size / 2 - stroke / 2;
  const circ = 2 * Math.PI * radius;
  const strokePct = ((100 - percentage) * circ) / 100;

  return (
    <div className="-rotate-90">
      <svg height={size} width={size} xmlns="http://www.w3.org/2000/svg">
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={circ}
          strokeDashoffset={percentage === 0 ? 0 : strokePct}
          strokeLinecap="round"
          className={clsx("transition-all ease-linear", {
            "animate-pulse": isRunning,
          })}
        />
      </svg>
    </div>
  );
}
