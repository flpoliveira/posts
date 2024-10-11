import { format } from "date-fns";
import { CategoryType } from "../App.interface";
import { FilterButton } from "./FilterButton";

function formatDate(date: string) {
  return format(new Date(date), "EEEE, MMMM do yyyy");
}

function Post({
  description,
  date,
  categories,
  onCategoryClick,
  onFavoriteClick,
  selectedCategory,
}: {
  description: string;
  date: string;
  categories: Array<CategoryType>;
  onCategoryClick: (id: string) => void;
  onFavoriteClick: (el: CategoryType, newValue: boolean) => void;
  selectedCategory?: string | null;
}) {
  return (
    <div className="py-8 px-4 flex flex-col gap-4 border-accent">
      <span className="text-primary text-md font-semibold">
        {formatDate(date)}
      </span>
      <span className="text-foregroundSecondary text-md font-normal">
        {description}
      </span>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isFavorited = category.favorite;
          const type =
            selectedCategory && selectedCategory === category.id
              ? "secondary"
              : "primary";
          return (
            <FilterButton
              key={`${category.id}-sidebar-button`}
              type={type}
              label={category.name}
              isFavorited={isFavorited}
              onFilterClick={() => onCategoryClick(category.id)}
              onFavoriteClick={() =>
                onFavoriteClick(category, !category.favorite)
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export { Post };
