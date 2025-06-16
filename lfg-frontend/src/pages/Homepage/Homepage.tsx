import type { JSX } from "react";
import {
    Card,
    CardFooter,
    CardContent,
} from "../../components/Card/Card"
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { GAMES } from "../../constants/games";

export const Homepage = (): JSX.Element => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen flex flex-col items-center p-4">
            <div>
                <div className="flex justify-between items-center ">
                    <div className="flex gap-3 py-8 items-center">
                        <Button variant="outline">Most Popular</Button>
                        <Button variant="outline">My Games</Button>

                        <div className="flex-grow ml-6">
                            <input type="text" placeholder="Search for a game" className="w-full min-w-64 border border-gray-500 rounded-md p-2" />
                        </div>
                    </div>
                    <div className="gap-2 flex">
                        <Button variant="outline">Add game</Button>
                        <Button variant="outline">Create a new group</Button>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {GAMES.map((game) => {
                        return (
                            <Card onClick={handleCardClick} className="min-h-76 justify-between cursor-pointer hover:bg-gray-700 transition-all transition duration-300 ease-in-out hover:shadow-md dark:hover:shadow-white/20">
                                <CardContent cardContent="!px-0">
                                    <div className="w-full h-60">
                                        <img
                                            src={game.image}
                                            className="w-full h-full object-cover object-bottom"
                                            alt={game.title}
                                        />
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col">
                                    <p>{game.title}</p>

                                    <div className="flex items-center gap-1">
                                        <div className="mb-[-2px] text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse">
                                            230
                                        </div>
                                        <div className="border-b border-transparent">active groups</div>
                                    </div>
                                </CardFooter>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};