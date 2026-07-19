"use client";

import type { TechStack } from "@/data/stacks";

type ComparisonTableProps = {
  stacks: TechStack[];
};

function RatingDots({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`h-2 w-2 rounded-full ${
            i < value
              ? "bg-blue-600 dark:bg-blue-500"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
        />
      ))}
    </div>
  );
}

export function ComparisonTable({ stacks }: ComparisonTableProps) {
  const top3 = stacks.slice(0, 3);

  const rows = [
    {
      label: "Scalability",
      key: "scalabilityRating" as const,
    },
    {
      label: "Time to MVP",
      key: "timeToMvpRating" as const,
    },
    {
      label: "Dev Experience",
      key: "dxRating" as const,
    },
    {
      label: "Cost Efficiency",
      key: "costRating" as const,
    },
    {
      label: "Enterprise Ready",
      key: "enterpriseRating" as const,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="py-3 pr-4 text-left font-medium text-gray-500 dark:text-gray-400">
              Criteria
            </th>
            {top3.map((stack, i) => (
              <th
                key={stack.id}
                className="px-4 py-3 text-left font-medium text-gray-900 dark:text-white"
              >
                <div className="flex items-center gap-2">
                  {i === 0 && (
                    <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                      #1
                    </span>
                  )}
                  {stack.name.split(" + ")[0]}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
          {rows.map((row) => (
            <tr key={row.key}>
              <td className="py-3 pr-4 text-gray-600 dark:text-gray-400">
                {row.label}
              </td>
              {top3.map((stack) => (
                <td key={stack.id} className="px-4 py-3">
                  <RatingDots value={stack[row.key]} />
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td className="py-3 pr-4 text-gray-600 dark:text-gray-400">
              Est. Monthly Cost
            </td>
            {top3.map((stack) => (
              <td
                key={stack.id}
                className="px-4 py-3 text-xs text-gray-700 dark:text-gray-300"
              >
                {stack.monthlyCost}
              </td>
            ))}
          </tr>
          <tr>
            <td className="py-3 pr-4 text-gray-600 dark:text-gray-400">
              Key Technologies
            </td>
            {top3.map((stack) => (
              <td key={stack.id} className="px-4 py-3">
                <div className="flex flex-wrap gap-1">
                  {stack.technologies.slice(0, 3).map((t) => (
                    <span
                      key={t.name}
                      className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                    >
                      {t.name}
                    </span>
                  ))}
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
