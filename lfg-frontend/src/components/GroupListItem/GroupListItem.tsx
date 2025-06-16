import type { JSX } from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

interface GroupListItemProps {
    className?: string;
}

export const GroupListItem = ({ className }: GroupListItemProps): JSX.Element => {

    const navigate = useNavigate();

    const handleListGroupItemClick = () => {
        navigate('/chat');
    };

    return (
        <div className={cn("bg-gray-800 rounded-md border border-gray-700 mx-8 p-2 cursor-pointer hover:bg-gray-700 transition-all transition duration-300 ease-in-out hover:shadow-md dark:hover:shadow-white/20", className)}
            onClick={handleListGroupItemClick}>
            <div className="flex items-center gap-4 mx-2">
                <div className="w-10 h-10 rounded-full bg-gray-200">
                    <img src="/images/dragon.png" alt="Group Logo" className="w-full h-full object-cover p-2" />
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="text-lg font-bold">Group Name</h3>
                    <p className="text-sm text-gray-500">Group Description</p>
                    <div className="flex items-center gap-2">
                        <div className="text-sm text-gray-500">123 members</div>
                    </div>
                </div>
            </div>
        </div>
    );
};