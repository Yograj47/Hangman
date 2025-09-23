export type Difficulty = "easy" | "medium" | "hard";

export interface CategoryStore {
    category: string;
    difficulty: string;
    setCategory: (category) => void;
    setDifficulty: (difficulty) => void;
    reset: () => void
}