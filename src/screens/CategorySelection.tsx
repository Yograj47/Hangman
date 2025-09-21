import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import categoriesData from "../data/categories.json";

// Define the shape of the data for better type safety
type Difficulty = "easy" | "medium" | "hard";

/**
 * A screen for selecting a game category and difficulty.
 * It dynamically loads categories from a JSON file.
 */
export default function CategoryScreen() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [categories, setCategories] = useState<string[]>([]);

    // Dynamically load categories from the JSON data
    useEffect(() => {
        if (categoriesData) {
            setCategories(Object.keys(categoriesData));
        }
    }, []);

    // Function to handle category selection
    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
    };

    // Function to handle difficulty selection
    const handleDifficultySelect = (difficulty: Difficulty) => {
        if (selectedCategory) {
            // Navigate to the game screen with the selected category and difficulty
            navigate(`/game/${selectedCategory}/${difficulty}`);
        }
    };

    return (
        <div className="h-screen w-full flex justify-center items-center p-4">
            <Card className="w-full max-w-md rounded-3xl bg-slate-900/60 backdrop-blur-lg border border-green-700 shadow-xl shadow-green-950/50">
                <CardContent className="flex flex-col items-center text-center p-10 gap-8">
                    {/* Title and instructions */}
                    <h1 className="text-4xl font-extrabold tracking-wider text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">
                        {selectedCategory ? "Select Difficulty" : "Select a Category"}
                    </h1>

                    {/* Category Selection */}
                    {!selectedCategory && (
                        <div className="grid grid-cols-2 gap-4 w-full">
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    className="h-14 bg-green-600/20 hover:bg-green-700/40 text-white font-bold text-lg transition-all duration-300 transform hover:scale-105"
                                    onClick={() => handleCategorySelect(category)}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </Button>
                            ))}
                        </div>
                    )}

                    {/* Difficulty Selection */}
                    {selectedCategory && (
                        <div className="flex flex-col gap-4 w-full">
                            <Button
                                className="w-full h-14 bg-gradient-to-br from-green-600 to-green-800 text-white font-bold text-xl rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/50"
                                onClick={() => handleDifficultySelect("easy")}
                            >
                                Easy
                            </Button>
                            <Button
                                className="w-full h-14 bg-gradient-to-br from-yellow-600 to-yellow-800 text-white font-bold text-xl rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/50"
                                onClick={() => handleDifficultySelect("medium")}
                            >
                                Medium
                            </Button>
                            <Button
                                className="w-full h-14 bg-gradient-to-br from-red-600 to-red-800 text-white font-bold text-xl rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/50"
                                onClick={() => handleDifficultySelect("hard")}
                            >
                                Hard
                            </Button>
                        </div>
                    )}

                    {/* Back to Home Button */}
                    <Button
                        variant="outline"
                        className="w-full h-14 border-2 border-green-600 text-green-400 font-bold text-lg rounded-full transition-all duration-300 transform hover:bg-green-950/20 hover:text-green-300"
                        onClick={() => navigate("/")}
                    >
                        Back to Home
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
