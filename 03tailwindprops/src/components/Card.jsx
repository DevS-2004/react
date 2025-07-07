import React from "react"

function Card({username}){

    return (
    <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mt-4 w-100 rounded-xl">
    <img class="w-24 h-24 md:w-48 md:h-auto rounded-xl mx-auto " src="https://imgs.search.brave.com/fZFmtt8r63jZvoj_jNo1bMCyXHtukRdhrTnLF6YjWDs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90YWls/d2luZGNzcy5jb20v/X25leHQvc3RhdGlj/L21lZGlhL2Nzcy1n/cmlkLTEuZDZiODhk/MDUucG5n" alt="" width="384" height="512" />
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
            <p class="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
            </p>
        </blockquote>
        <figcaption class="font-medium" >
            <div class="text-sky-500 dark:text-sky-400">{username}</div>
            <div class="text-slate-700 dark:text-slate-500">Staff Engineer, Algolia</div>
        </figcaption>
    </div>
    </figure>
    )
}

export default Card