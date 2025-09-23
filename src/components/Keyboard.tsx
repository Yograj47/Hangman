import { Button } from "./ui/button";

export default function Keyboard() {
    const isGuessed = false;

    const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
    return (
        <div className="grid grid-cols-7 gap-2">
            {letters.map((letter) => {
                return (
                    <Button
                        key={letter}
                        variant="outline"
                        className={`h-12 font-bold text-lg transition-colors ${isGuessed
                            ? "bg-slate-300 text-gray-400 cursor-not-allowed"
                            : "hover:bg-green-200"
                            }`}
                        onClick={(e) => console.log(e.target)
                        }
                    >
                        {letter}
                    </Button>
                );
            })}
        </div>
    )
}
