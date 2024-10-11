import { Star } from "../icon/Star";

function Button({
  type,
  onClick,
  onClickIcon,
  label,
  isFavorite,
}: {
  type: "primary" | "secondary";
  onClick: () => void;
  label: string;
  onClickIcon?: () => void;
  isFavorite?: boolean;
}) {
  return (
    <button
      type="button"
      className={`transition-all duration-200 group items-center pl-6 pr-4 py-2 rounded-sm border-primary border w-fit group text-md flex gap-2
        ${
          type === "primary"
            ? "bg-primary text-primaryForeground "
            : "bg-surface text-primary"
        }`}
      onClick={onClick}
    >
      <span className="text-md leading-6 group-hover:opacity-90 text-nowrap">
        {label}
      </span>
      <div
        className={`w-5 h-5 fill-none
          ${
            isFavorite
              ? type === "primary"
                ? "fill-primaryForeground"
                : "fill-primary"
              : ""
          }
          ${
            type === "primary"
              ? "stroke-primaryForeground hover:fill-primaryForeground"
              : "stroke-primary hover:fill-primary"
          }`}
        onClick={onClickIcon}
      >
        <Star />
      </div>
    </button>
  );
}

export { Button };
