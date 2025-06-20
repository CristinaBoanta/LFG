import { GameRoomListing } from "./GameRoomListing/GameRoomListing";

export const GameRoomList = () => {
    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-800 backdrop-blur-sm min-h-[20vh] border border-gray-700">
            <GameRoomListing />
        </div>
    )
}