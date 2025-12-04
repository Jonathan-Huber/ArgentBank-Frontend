export function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  ...props
}) {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        {...props}
      />
    </div>
  );
}

export function CheckboxField({ id, label, checked, onChange, ...props }) {
  return (
    <div className="input-remember">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export function TextareaField({
  id,
  label,
  value,
  onChange,
  placeholder,
  required = false,
  ...props
}) {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        {...props}
      />
    </div>
  );
}

export function SelectField({
  id,
  label,
  value,
  onChange,
  options = [],
  required = false,
  ...props
}) {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={value || ""}
        onChange={onChange}
        required={required}
        {...props}
      >
        <option value="">-- Sélectionner --</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
