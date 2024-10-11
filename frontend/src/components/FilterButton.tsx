import { StarIcon } from "../icon/StarIcon";

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
      className={`transition-all duration-200 items-center pl-6 pr-4 py-2 rounded-sm border-primary border w-fit group text-md flex gap-2 hover:bg-opacity-90
          ${
            type === "primary"
              ? "bg-primary text-primaryForeground"
              : "bg-surface text-primary"
          }
        `}
      onClick={onFilterClick}
    >
      <span className="text-md leading-6 text-nowrap">{label}</span>
      <div
        className={`w-5 h-5 fill-none transition-all duration-75 hover:scale-125`}
        onClick={(e) => {
          e.stopPropagation();
          onFavoriteClick?.();
        }}
      >
        {isFavorited ? (
          <StarIcon
            className={
              type === "primary" ? "fill-primaryForeground" : "fill-primary"
            }
          />
        ) : (
          <StarIcon
            className={
              type === "primary" ? "stroke-primaryForeground" : "stroke-primary"
            }
          />
        )}
      </div>
    </button>
  );
}

export { FilterButton };
