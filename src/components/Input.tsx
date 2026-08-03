export function Input({ label }: { label: string }) {
  return (
    <label className="block">
      <span className="text-sm text-text">{label}</span>
      <input className="mt-1 w-full bg-surface rounded-lg border px-3 py-2 focus:border-primary disabled:opacity-50" />
    </label>
  );
}
