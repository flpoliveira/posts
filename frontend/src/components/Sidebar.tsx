import { InputRadio } from "./InputRadio";
import { FilterButton } from "./FilterButton";

function Sidebar({
  categories = [],
  onCategoryClick,
  categoryFilter,
  onChangeCategoryFilter,
  onFavoriteClick,
  selectedCategory,
}: {
  categories?: Array<{ id: string; name: string; favorite: boolean }>;
  categoryFilter: "all" | "favorite";
  onChangeCategoryFilter: (e: "all" | "favorite") => void;
  onCategoryClick: (id: string) => void;
  onFavoriteClick: (
    el: { id: string; name: string; favorite: boolean },
    newValue: boolean
  ) => void;
  selectedCategory?: string;
}) {
  return (
    <div className="bg-surface h-full md:min-h-[100vh] w-full border-r-[1px] border-accent md:w-fit">
      <div className="bg-primary p-5 flex justify-center items-center">
        <span className="text-md text-primaryForeground text-center font-semibold">
          Posts
        </span>
      </div>
      <div className="flex w-full py-6 px-4 md:gap-12 gap-6 flex-col flex-start">
        <InputRadio
          value={categoryFilter}
          onChange={(e) => onChangeCategoryFilter(e as "all" | "favorite")}
          options={[
            { value: "all", label: "All categories" },
            { value: "favorite", label: "Favorite categories" },
          ]}
        />
        <div className="flex gap-2 md:flex-col overflow-auto">
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
    </div>
  );
}

export { Sidebar };
