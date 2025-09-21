import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function HomeScreen() {
    const navigate = useNavigate();

    return (
        <div className="h-screen w-full flex justify-center items-center p-4">
            <Card className="w-full max-w-md rounded-3xl bg-slate-900/60 backdrop-blur-lg 
            border border-green-700 shadow-xl shadow-green-950/50">
                <CardContent className="flex flex-col items-center text-center p-10 gap-8">
                    {/* Title with an eerie, glowing effect */}
                    <h1 className="text-5xl font-extrabold tracking-wider text-green-400 
                    drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">
                        Hangman: No Way Back
                    </h1>

                    {/* Buttons with enhanced styles and hover effects */}
                    <div className="flex flex-col gap-5 w-full">
                        <Button
                            className="w-full h-14 bg-gradient-to-br from-green-600 to-green-800 text-white 
                            font-bold text-xl rounded-full transition-all duration-300 transform hover:scale-105 
                            hover:shadow-xl hover:shadow-green-500/50"
                            onClick={() => navigate("/category")}
                        >
                            Start Game
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full h-14 border-2 border-green-600 text-green-400 font-bold
                             text-lg rounded-full transition-all duration-300 transform hover:bg-green-950/20
                              hover:text-green-300"
                            onClick={() => navigate("/howtoplay")}
                        >
                            How to Play
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
