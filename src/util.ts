import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type PropsOf<T> = T extends React.ComponentType<infer P> ? P : never;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
