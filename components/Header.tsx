"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

const Header = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const input = inputRef.current?.value;
        if (!input) return;

        if (inputRef.current?.value) {
            inputRef.current.value = "";
        }

        try {
            //Call our API to activate the Scraper..
            // /api/activateScraper

            const response = await fetch("/api/activateScrapper", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ search: input }),
            });

            // Navigate to the collection page
            const { collection_id, start_eta } = await response.json();

            router.push(`/search/${collection_id}`);
        } catch (error) {
            //Handle any erros
        }

        //Wait for the response to comeback
    };

    return (
        <header className="mx-20">
            <form
                className="flex items-center space-x-2 justify-center rounded-full py-2 px-4 bg-indigo-100 max-w-md"
                onSubmit={handleSearch}
            >
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    className="flex-1 outline-none bg-transparent text-idnigo-400 placeholder:text-indigo-300"
                />
                <button hidden>Search</button>
                <MagnifyingGlassIcon className="h-6 w-6 text-indigo-300" />
            </form>
        </header>
    );
};

export default Header;
