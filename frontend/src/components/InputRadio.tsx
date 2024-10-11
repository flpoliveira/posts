function InputRadio({
  value,
  onChange,
  options,
}: {
  value?: string;
  onChange: (e: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="flex gap-4">
      {options.map((option, index) => (
        <div
          className="flex gap-2 cursor-pointer hover:opacity-70 duration-200 transition-all"
          key={`${index}-input-radio-option`}
          onClick={() => {
            onChange(option.value);
          }}
        >
          <input
            type="radio"
            className="sr-only peer"
            checked={value === option.value}
            onChange={() => onChange(option.value)}
          />
          <div className="w-5 h-5 rounded-full border-2 border-accent peer-checked:[&>div]:bg-primary flex justify-center items-center">
            <div className="w-3 h-3 rounded-full"></div>
          </div>
          <label className="cursor-pointer text-sm text-nowrap">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export { InputRadio };
