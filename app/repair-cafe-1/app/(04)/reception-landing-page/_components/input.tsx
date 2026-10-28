export default function Input({ label, type, name }: { label: string; type: string; name: string;  }) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
      />
    </div>
  );
}
