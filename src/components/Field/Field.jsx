function Field({
  id,
  label,
  type = "text",
  value,
  onChange,
  options = [],
  placeholder,
  required = false,
}) {
  if (type === "select") {
    return (
      <div className="input-wrapper">
        <label htmlFor={id}>{label}</label>
        <select
          id={id}
          value={value || ""}
          onChange={onChange}
          required={required}
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

  if (type === "textarea") {
    return (
      <div className="input-wrapper">
        <label htmlFor={id}>{label}</label>
        <textarea
          id={id}
          value={value || ""}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </div>
    );
  }

  if (type === "checkbox") {
    return (
      <div className="input-remember">
        <input
          type="checkbox"
          id={id}
          checked={!!value}
          onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }

  // default input types (text, password, email, etc.)
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
      />
    </div>
  );
}

export default Field;
