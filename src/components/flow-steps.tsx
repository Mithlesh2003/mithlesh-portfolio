import type { FlowStep } from "@/content/projects";

export function FlowSteps({ steps }: { steps: FlowStep[] }) {
  return (
    <ol className="relative border-l border-line pl-6">
      {steps.map((step, index) => (
        <li key={step.title} className="relative pb-8 last:pb-0">
          <span
            aria-hidden
            className="absolute -left-[1.8125rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-line bg-ink font-mono text-[10px] text-accent"
          >
            {index + 1}
          </span>
          <h4 className="text-sm font-medium tracking-wide text-paper">
            {step.title}
          </h4>
          <p className="prose-body mt-1 text-sm">{step.detail}</p>
        </li>
      ))}
    </ol>
  );
}
