export function Input({ label }: { label: string }) {
  return (
    <label className="block">
      <span className="text-sm text-text">{label}</span>
      <input
        className="mt-1 w-full bg-[#dc2626] p-[13px] rounded-[22px] border"
        style={{ color: '#b91c1c' }}
      />
    </label>
  );
}
