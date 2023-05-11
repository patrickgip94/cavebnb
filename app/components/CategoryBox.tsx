"use client";

// UTILITIES
import { useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {}; // define empty query

    // loop through params, parse the query so it wont be a string and remain as a object,
    // because params.toString is a string by default
    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    // spread the query and add the new category
    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    // checks if the category is already selected, if clicked again it would be removed.
    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    // generates the url string
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery, // passes the manipulated query
      },
      { skipNull: true }
    );
    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 
    border-b-2 hover:text-neutral-800 transition cursor-pointer 
    ${selected ? "border-b-neutral-800" : "border-transparent"}
    ${selected ? "text-neutral-800" : "text-neutral-500"}
    `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
