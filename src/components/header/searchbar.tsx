"use client";
import { Search, X } from "lucide-react";
import React, { useState } from "react";
import { SearchForm } from "./search-form";
import { Button } from "../ui/button";
import { NavigationMenuDemo } from "./navigation-menu";

const Searchbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <React.Fragment>
      <div className="hidden md:block">
        <Search onClick={() => setShowSearchBar(true)} />
        {showSearchBar && (
          <div className="absolute z-50 w-screen h-screen bg-black/80 left-0 top-0 flex p-45% justify-center items-center">
            <div className="relative bg-white p-10 rounded-lg">
              <Button
                className="absolute bottom-10 left-24"
                color="white"
                onClick={() => setShowSearchBar(false)}
              >
                <X color="white" />
              </Button>
              <SearchForm />
            </div>
          </div>
        )}
      </div>
      <div className="block md:hidden">
        <SearchForm />
      </div>
    </React.Fragment>
  );
};

export default Searchbar;
