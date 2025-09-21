import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

/**
 * A dedicated component for the "How to Play" screen, providing game instructions
 * in a consistent, themed layout.
 */
export default function HowToPlayScreen() {
    const navigate = useNavigate();

    return (
        <div className="h-screen w-full flex justify-center items-center p-4">
            <Card className="w-full max-w-md rounded-3xl bg-slate-900/60 backdrop-blur-lg border border-green-700 shadow-xl shadow-green-950/50">
                <CardContent className="flex flex-col items-center text-center p-10 gap-8">
                    {/* Title */}
                    <h1 className="text-4xl font-extrabold tracking-wider text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">
                        How to Play
                    </h1>

                    {/* Instructions List */}
                    <div className="flex flex-col gap-4 text-xl font-medium text-white/80">
                        <p>1. Choose a category and difficulty.</p>
                        <p>2. Guess the hidden word, one letter at a time.</p>
                        <p>3. An incorrect guess adds a part to the hangman.</p>
                        <p>4. Guess the word before the hangman is complete!</p>
                    </div>

                    {/* Back to Home Button */}
                    <Button
                        className="w-full h-14 bg-gradient-to-br from-green-600 to-green-800 text-white font-bold text-xl rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/50"
                        onClick={() => navigate("/")}
                    >
                        Back to Home
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
