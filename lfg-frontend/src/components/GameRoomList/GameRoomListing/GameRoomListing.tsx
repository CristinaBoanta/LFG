import { Button } from "../../Button/Button";
import { HiOutlineCog6Tooth } from "react-icons/hi2";

export const GameRoomListing = () => {
    return (
        <>
            <div className="game-group-header">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-6">
                        <div className="bg-gray-800 rounded-md border border-gray-700 p-2 w-full">
                            World of Warcraft
                        </div>
                        <div className="game-group-settings">
                            <Button variant="link">
                                <HiOutlineCog6Tooth />
                            </Button>
                        </div>
                    </div>


                    <div className="flex justify-between w-full">
                        <div>
                            <Button variant="outline">Add new field</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rooms flex flex-col gap-3">
                <div className="bg-gray-800 rounded-md border border-gray-700 mx-4 p-2 cursor-pointer hover:bg-gray-700 transition-all transition duration-300 ease-in-out hover:shadow-md dark:hover:shadow-white/20">
                    Events
                </div>

                <div className="bg-gray-800 rounded-md border border-gray-700 mx-4 p-2 cursor-pointer hover:bg-gray-700 transition-all transition duration-300 ease-in-out hover:shadow-md dark:hover:shadow-white/20">
                    Roster
                </div>

                <div className="bg-gray-800 rounded-md border border-gray-700 mx-4 p-2 cursor-pointer hover:bg-gray-700 transition-all transition duration-300 ease-in-out hover:shadow-md dark:hover:shadow-white/20">
                    Pinned Posts
                </div>

                <div className="bg-gray-800 rounded-md border border-gray-700 mx-4 p-2 cursor-pointer hover:bg-gray-700 transition-all transition duration-300 ease-in-out hover:shadow-md dark:hover:shadow-white/20">
                    Media
                </div>

                <div className="bg-gray-800 rounded-md border border-gray-700 mx-4 p-2 cursor-pointer hover:bg-gray-700 transition-all transition duration-300 ease-in-out hover:shadow-md dark:hover:shadow-white/20">
                    Activity Feed
                </div>
            </div>
        </>
    )
};