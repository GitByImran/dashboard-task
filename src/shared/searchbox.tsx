import { Search } from "lucide-react";
import React from "react";

const SearchBox = () => {
  return (
    <div>
      <div className="relative w-fit h-fit rounded-full overflow-hidden">
        <input
          type="text"
          className="px-6 pr-12 py-3 w-[400px] rounded-full bg-secondary focus-visible:outline-none"
          placeholder="search"
        />
        <button className="absolute right-0 top-0 h-full w-10 bg-transparent outline-transparent text-slate-500">
          <Search size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
