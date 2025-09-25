import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import useGameStore from "@/context/GameContext";
import type { Difficulty } from "@/types/game";
import { Loader } from "lucide-react";
import { useGameData } from "@/context/DataContext";

export default function CategoryScreen() {
    const { category, setCategory, setDifficulty, reset } = useGameStore();
    const navigate = useNavigate();
    const { data, loading } = useGameData();

    const handleDifficultySelect = (difficulty: Difficulty) => {
        setDifficulty(difficulty);
        navigate("/game");
    };

    if (loading) {
        return (
            <Loader />
        )
    }
    return (
        <div className="h-screen w-full flex justify-center items-center p-4">
            <Card className="w-full max-w-md rounded-3xl bg-slate-900/60 backdrop-blur-lg border border-green-700 shadow-xl shadow-green-950/50">
                <CardContent className="flex flex-col items-center text-center p-10 gap-8">
                    {/* Title */}
                    <h1 className="text-4xl font-extrabold tracking-wider text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">
                        {category ? "Select Difficulty" : "Select a Category"}
                    </h1>

                    {/* Category Selection */}
                    {!category && (
                        <div className="grid grid-cols-2 gap-4 w-full">
                            {data && Object.keys(data).map((k) => (
                                <Button
                                    key={k}
                                    className="h-14 bg-green-600/20 hover:bg-green-700/40 text-white font-bold text-lg transition-all duration-300 transform hover:scale-105"
                                    onClick={() => setCategory(k)}
                                >
                                    {k.charAt(0).toUpperCase() + k.slice(1)}
                                </Button>
                            ))}
                        </div>
                    )}

                    {/* Difficulty Selection */}
                    {category && (
                        <div className="flex flex-col gap-4 w-full">
                            <h2 className="text-2xl font-semibold text-green-300 mb-2">
                                Category: <span className="capitalize">{category}</span>
                            </h2>

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

                            {/* Back to categories button */}
                            <Button
                                variant="outline"
                                className="w-full h-14 border-2 border-zinc-600 text-slate-400 font-bold text-lg rounded-full transition-all duration-300 hover:bg-green-950/20 hover:text-zinc-300"
                                onClick={reset}
                            >
                                ← Back to Categories
                            </Button>
                        </div>
                    )}

                    {/* Back to Home Button */}
                    <Button
                        variant="outline"
                        className="w-full h-14 border-2 border-green-600 text-green-400 font-bold text-lg rounded-full transition-all duration-300 transform hover:bg-green-950/20 hover:text-green-300"
                        onClick={() => {
                            navigate("/");
                            reset();
                        }}
                    >
                        Back to Home
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
