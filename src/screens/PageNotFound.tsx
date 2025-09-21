import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

/**
 * A dedicated component for handling 404 "Page Not Found" errors.
 * It provides a consistent visual theme and a clear call to action to return home.
 */
export default function NotFoundScreen() {
    const navigate = useNavigate();

    return (
        <div className="h-screen w-full flex justify-center items-center p-4">
            <Card className="w-full max-w-md rounded-3xl bg-slate-900/60 backdrop-blur-lg border border-green-700 shadow-xl shadow-green-950/50">
                <CardContent className="flex flex-col items-center text-center p-10 gap-8">
                    {/* The 404 message */}
                    <h1 className="text-6xl font-extrabold tracking-wider text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">
                        404
                    </h1>
                    <p className="text-xl font-medium text-white/80">
                        Page Not Found
                    </p>

                    {/* Button to navigate back to the home screen */}
                    <Button
                        className="w-full h-14 bg-gradient-to-br from-green-600 to-green-800 text-white font-bold text-xl rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/50"
                        onClick={() => navigate("/")}
                    >
                        Go Home
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
