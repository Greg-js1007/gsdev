// src/lib/utils.js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Esta es la función "magica" combinadora
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}