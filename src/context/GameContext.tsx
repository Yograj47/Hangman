import type { CategoryStore } from "@/types/game";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useGameStore = create<CategoryStore>()(
    devtools(
        persist(
            (set) => ({
                category: "",
                difficulty: "",
                setCategory: (category) => {
                    set({ category })
                },
                setDifficulty(difficulty) {
                    set({ difficulty })
                },
                reset: () => set({ category: "", difficulty: "" })
            }),
            { name: "game-storage" }
        )
    )
)

export default useGameStore