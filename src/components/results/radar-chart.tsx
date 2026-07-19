"use client";

import type { TechStack } from "@/data/stacks";

type RadarChartProps = {
  stacks: TechStack[];
};

const axes = [
  { key: "scalabilityRating" as const, label: "Scalability" },
  { key: "timeToMvpRating" as const, label: "Time to MVP" },
  { key: "dxRating" as const, label: "Dev Experience" },
  { key: "costRating" as const, label: "Cost Efficiency" },
  { key: "enterpriseRating" as const, label: "Enterprise" },
];

const chartColors = [
  { stroke: "#2563eb", fill: "rgba(37, 99, 235, 0.15)" },
  { stroke: "#10b981", fill: "rgba(16, 185, 129, 0.1)" },
  { stroke: "#f59e0b", fill: "rgba(245, 158, 11, 0.1)" },
];

const size = 280;
const center = size / 2;
const radius = 110;
const levels = 5;

function polarToCartesian(
  angle: number,
  r: number
): { x: number; y: number } {
  // Start from top (-90 degrees)
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: center + r * Math.cos(rad),
    y: center + r * Math.sin(rad),
  };
}

export function RadarChart({ stacks }: RadarChartProps) {
  const angleStep = 360 / axes.length;

  // Grid rings
  const gridRings = Array.from({ length: levels }).map((_, i) => {
    const r = (radius / levels) * (i + 1);
    const points = axes
      .map((_, j) => {
        const { x, y } = polarToCartesian(j * angleStep, r);
        return `${x},${y}`;
      })
      .join(" ");
    return points;
  });

  // Axis lines
  const axisLines = axes.map((_, i) => {
    const { x, y } = polarToCartesian(i * angleStep, radius);
    return { x1: center, y1: center, x2: x, y2: y };
  });

  // Data polygons
  const dataPolygons = stacks.slice(0, 3).map((stack, stackIndex) => {
    const points = axes
      .map((axis, i) => {
        const value = stack[axis.key];
        const r = (radius / levels) * value;
        const { x, y } = polarToCartesian(i * angleStep, r);
        return `${x},${y}`;
      })
      .join(" ");
    return { points, color: chartColors[stackIndex] };
  });

  // Labels
  const labels = axes.map((axis, i) => {
    const { x, y } = polarToCartesian(i * angleStep, radius + 28);
    return { x, y, label: axis.label };
  });

  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-full w-full max-w-[320px]"
      >
        {/* Grid rings */}
        {gridRings.map((points, i) => (
          <polygon
            key={`ring-${i}`}
            points={points}
            fill="none"
            stroke="currentColor"
            strokeWidth={0.5}
            className="text-gray-200 dark:text-gray-700"
          />
        ))}

        {/* Axis lines */}
        {axisLines.map((line, i) => (
          <line
            key={`axis-${i}`}
            {...line}
            stroke="currentColor"
            strokeWidth={0.5}
            className="text-gray-200 dark:text-gray-700"
          />
        ))}

        {/* Data polygons */}
        {dataPolygons.map((polygon, i) => (
          <polygon
            key={`data-${i}`}
            points={polygon.points}
            fill={polygon.color.fill}
            stroke={polygon.color.stroke}
            strokeWidth={2}
            className="transition-all duration-700"
            style={{
              animationDelay: `${i * 200}ms`,
            }}
          />
        ))}

        {/* Data points */}
        {stacks.slice(0, 3).map((stack, stackIndex) =>
          axes.map((axis, i) => {
            const value = stack[axis.key];
            const r = (radius / levels) * value;
            const { x, y } = polarToCartesian(i * angleStep, r);
            return (
              <circle
                key={`point-${stackIndex}-${i}`}
                cx={x}
                cy={y}
                r={3}
                fill={chartColors[stackIndex].stroke}
                stroke="white"
                strokeWidth={1.5}
              />
            );
          })
        )}

        {/* Labels */}
        {labels.map((label, i) => (
          <text
            key={`label-${i}`}
            x={label.x}
            y={label.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-gray-600 text-[10px] font-medium dark:fill-gray-400"
          >
            {label.label}
          </text>
        ))}
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        {stacks.slice(0, 3).map((stack, i) => (
          <div key={stack.id} className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: chartColors[i].stroke }}
            />
            <span className="text-xs text-gray-600 dark:text-gray-400">
              {stack.name.split(" + ")[0]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
