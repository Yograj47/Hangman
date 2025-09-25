import HangmanDrawing from "@/components/HangmanDrawing";
import Keyboard from "@/components/Keyboard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WordDisplay from "@/components/WordDisplay";
import useGameStore from "@/context/GameContext";
import { Home, RefreshCcw } from "lucide-react";

export default function GamePlayScreen() {
    const { category, difficulty } = useGameStore();

    return (
        <div className="h-screen w-full flex justify-center items-center p-4">
            <Card className="w-full max-w-5xl bg-slate-900/60 backdrop-blur-lg border border-green-700 shadow-xl shadow-green-950/50">
                <CardContent className="h-full w-full grid grid-cols-7 gap-6 p-6">
                    {/* Left: Game Area */}
                    <div className="col-span-5 flex flex-col items-center justify-between">
                        {/* Hangman Drawing */}
                        <div className="w-full flex justify-center">
                            <HangmanDrawing />
                        </div>

                        {/* Word */}
                        <WordDisplay category={category} difficulty={difficulty} />

                        {/* Keyboard Grid */}
                        <div className="mt-6 w-full flex justify-center">
                            <Keyboard />
                        </div>
                    </div>

                    {/* Right: Sidebar Info */}
                    <div className="col-span-2 flex flex-col justify-between rounded-2xl bg-slate-800/40 border border-green-700 p-4">
                        <div className="space-y-3 text-slate-200">
                            <p className="text-lg font-semibold">
                                Category:{" "}
                                <span className="capitalize text-green-400">{category}</span>
                            </p>
                            <p className="text-lg font-semibold">
                                Difficulty:{" "}
                                <span className="capitalize text-yellow-400">{difficulty}</span>
                            </p>
                        </div>

                        <div className="mt-4 text-center">
                            <p className="text-xl font-bold text-red-400 drop-shadow-[0_0_6px_rgba(239,68,68,0.8)]">
                                Life: 3 / 7
                            </p>
                        </div>

                        <div className="flex justify-center gap-3 mt-6">
                            <Button
                                size="icon"
                                className="rounded-full bg-green-700 hover:bg-green-600 shadow-md shadow-green-900/60"
                            >
                                <RefreshCcw className="h-5 w-5 text-white" />
                            </Button>
                            <Button
                                size="icon"
                                className="rounded-full bg-slate-700 hover:bg-slate-600 shadow-md shadow-slate-900/60"
                            >
                                <Home className="h-5 w-5 text-white" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
