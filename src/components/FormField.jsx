export default function FormField({ id, label, type = 'text', value, onChange, required = false, rows }) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="f-1">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          className="form-control f-1"
          rows={rows || 5}
          value={value}
          onChange={onChange}
          required={required}
        />
      ) : (
        <input
          type={type}
          id={id}
          className="form-control f-1"
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
}