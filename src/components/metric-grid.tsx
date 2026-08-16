import type { Metric } from "@/content/projects";

export function MetricGrid({
  metrics,
  columns = 3,
}: {
  metrics: readonly Metric[];
  columns?: 2 | 3 | 4;
}) {
  const cols =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <dl className={`grid gap-px overflow-hidden rounded border border-line bg-line ${cols}`}>
      {metrics.map((metric) => (
        <div key={`${metric.value}-${metric.label}`} className="bg-ink-card p-6">
          <dt className="display text-3xl text-accent-soft">{metric.value}</dt>
          <dd className="mt-2 text-sm leading-relaxed text-paper-dim">
            {metric.label}
            {metric.note && (
              <span className="mt-1 block text-xs text-paper-faint">
                {metric.note}
              </span>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
