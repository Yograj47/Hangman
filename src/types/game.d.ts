export type Difficulty = "easy" | "medium" | "hard";

export interface CategoryStore {
    category: string;
    difficulty: string;
    setCategory: (category) => void;
    setDifficulty: (difficulty) => void;
    reset: () => void
}

export type WordData = {
    words: string;
    hints: string;
}

export type DifficultyCategory = {
    [K in Difficulty]: WordData[];
}

export type GameData = {
    [category: string]: DifficultyCategory;
}

