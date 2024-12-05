export default function GlitchText({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative text-4xl text-center font-rubik">
            {/* Main Text */}
            <span className="block">{children}</span>
            {/* Glitch Effect */}
            <span className="absolute top-0 left-0 block text-violet-200 animate-glitchHorizontal opacity-40">
                {children}
            </span>
            <span className="absolute top-0 left-0 block text-green-700 animate-glitch opacity-60">
                {children}
            </span>
        </div>
    );
}