export default function Placeholder({ label, tall = false }: { label: string; tall?: boolean }) {
  return (
    <div className={`ph${tall ? " ph-tall" : ""}`} role="img" aria-label={`Placeholder: ${label}`}>
      <span>{label}</span>
    </div>
  );
}
