import { Star } from "../icon/Star";

function FilterButton({
  type,
  onFilterClick,
  onFavoriteClick,
  label,
  isFavorited,
}: {
  type: "primary" | "secondary";
  label: string;
  onFilterClick?: () => void;
  onFavoriteClick?: () => void;
  isFavorited?: boolean;
}) {
  return (
    <button
      type="button"
      className={`transition-all duration-200 group items-center pl-6 pr-4 py-2 rounded-sm border-primary border w-fit group text-md flex gap-2 
        ${
          type === "primary"
            ? "bg-primary text-primaryForeground hover:bg-opacity-90"
            : "bg-surface text-primary hover:bg-accent"
        }`}
      onClick={onFilterClick}
    >
      <span className="text-md leading-6 text-nowrap">{label}</span>
      <div
        className={`w-5 h-5 fill-none transition-all duration-75 hover:scale-125
          ${
            isFavorited
              ? type === "primary"
                ? "fill-primaryForeground"
                : "fill-primary"
              : ""
          }
          ${
            type === "primary" ? "stroke-primaryForeground" : "stroke-primary"
          }`}
        onClick={(e) => {
          e.stopPropagation();
          onFavoriteClick?.();
        }}
      >
        <Star />
      </div>
    </button>
  );
}

export { FilterButton };
