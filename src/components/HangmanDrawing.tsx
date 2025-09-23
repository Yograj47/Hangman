const HangmanDrawing = () => {
    return (
        <svg width="250" height="300" viewBox="0 0 250 300">
            {/* Gallow - Base */}
            <line x1="50" y1="250" x2="200" y2="250" stroke="#000" strokeWidth="3" shapeRendering="crispEdges" />
            {/* Gallow - Upright */}
            <line x1="75" y1="50" x2="75" y2="250" stroke="#000" strokeWidth="3" />
            {/* Gallow - Crossbar */}
            <line x1="75" y1="50" x2="150" y2="50" stroke="#000" strokeWidth="3" />
            {/* Gallow - Rope */}
            <line x1="149" y1="50" x2="149" y2="100" stroke="#000" strokeWidth="3" />

            {/* Hangman - Head */}
            <circle cx="149" cy="114" r="14" stroke="#000" strokeWidth="3" fill="none" />
            {/* Hangman - Body */}
            <line x1="149" y1="128" x2="149" y2="178" stroke="#000" strokeWidth="3" />
            {/* Hangman - Left Arm */}
            <line x1="149" y1="140" x2="130" y2="160" stroke="#000" strokeWidth="3" />
            {/* Hangman - Right Arm */}
            <line x1="149" y1="140" x2="170" y2="160" stroke="#000" strokeWidth="3" />
            {/* Hangman - Left Leg */}
            <line x1="149" y1="178" x2="130" y2="200" stroke="#000" strokeWidth="3" />
            {/* Hangman - Right Leg */}
            <line x1="149" y1="178" x2="170" y2="200" stroke="#000" strokeWidth="3" />
        </svg>
    );
};

export default HangmanDrawing;
