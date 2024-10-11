import { useState } from "react";
import { InputRadio } from "./InputRadio";
import { FilterButton } from "./FilterButton";

function Sidebar() {
  const [value, setValue] = useState("all");
  return (
    <div className="bg-surface h-full md:min-h-[100vh] w-full border-r-[1px] border-accent md:w-fit">
      <div className="bg-primary p-5 flex justify-center items-center">
        <span className="text-md text-primaryForeground text-center font-semibold">
          Posts
        </span>
      </div>
      <div className="flex w-full py-6 px-4 md:gap-12 gap-6 flex-col flex-start">
        <InputRadio
          value={value}
          onChange={(e) => setValue(e)}
          options={[
            { value: "all", label: "All categories" },
            { value: "favorite", label: "Favorite categories" },
          ]}
        />
        <div className="flex gap-2 md:flex-col overflow-auto">
          <FilterButton
            type={"secondary"}
            onClick={() => null}
            label="Cooking"
            onClickIcon={() => null}
          />
          <FilterButton
            type={"primary"}
            onClick={() => null}
            label="Latest Tech News"
            onClickIcon={() => null}
            isFavorite
          />
          <FilterButton
            type={"primary"}
            onClick={() => null}
            label="Travel and Adventure"
            onClickIcon={() => null}
          />
        </div>
      </div>
    </div>
  );
}

export { Sidebar };
