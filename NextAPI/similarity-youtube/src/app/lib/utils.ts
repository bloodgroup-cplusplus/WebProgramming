// few utility functions 

import {ClassValue,clsx} from "clsx";
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[])
{
    return twMerge(clsx(inputs))

}

// py-2 px-2 -> turns or merges into p-2

