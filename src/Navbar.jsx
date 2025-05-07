import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="App" class="py-3 px-20 flex w-full font-serif text-sm justify-end">
                    <Link to="/" class="p-4 hover:text-pink-300 active:text-pink-800">Home</Link>
                    <Link to="/about" class="p-4 hover:text-pink-300 active:text-pink-800">About Me</Link>
                    <Link to="/portfolio" class="p-4 hover:text-pink-300 active:text-pink-800">Portfolio</Link>
        </div>
    )
}