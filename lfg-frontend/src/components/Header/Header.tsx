import type { JSX } from "react";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { useLogout } from "../../hooks/useLogout";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { HiOutlineBell } from "react-icons/hi";
import { getJoinRequests } from "../../lib/api/joinRequest";
import { setJoinRequests } from "../../store/joinRequests";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../Dropdown/Dropdown";

export const Header = (): JSX.Element => {

    const { logout } = useLogout();
    const dispatch = useDispatch();

    const user = useSelector((state: RootState) => state.auth.user);
    const joinRequests = useSelector((state: RootState) => state.joinRequests.joinRequestList);

    const handleLogout = () => {
        logout();
    }

    const fetchJoinRequests = async () => {
        try {
            const response = await getJoinRequests();
            dispatch(setJoinRequests(response.data));

            console.log(response.data, ' these are the join requests from API...');

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.log(error, ' ...Failed to fetch join requests')
        }
    }

    return (
        <header className="bg-white shadow-md">
            <div className="max-w-8/10 mx-auto">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold text-gray-800">LFG</Link>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <div className="flex items-center justify-center">

                            {!user && <div className="flex items-center">
                                <Link to="/register" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                                    <FaUser />
                                    <div>Sign Up</div>
                                </Link>
                                <Link to="/login" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                                    <FaUser />
                                    <div>Log In</div>
                                </Link>
                            </div>}
                        </div>

                        <div className="flex gap-3 items-center">
                            {user && <Link to="/profile" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                                <FaUser />
                                <div>My profile</div>
                            </Link>}
                            {user && <div className="text-gray-600">{user.email}</div>}
                            <div>
                                <DropdownMenu onOpenChange={(open) => {
                                    if (open) {
                                        fetchJoinRequests();
                                    }
                                }}>
                                    <DropdownMenuTrigger>
                                        <HiOutlineBell />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="bg-gray-800">
                                        {joinRequests.length === 0 ? (
                                            <DropdownMenuItem>
                                                <div className="text-gray-400">No join requests</div>
                                            </DropdownMenuItem>
                                        ) : (
                                            joinRequests.map((request) => {
                                                return (
                                                    <DropdownMenuItem key={request._id}>
                                                        <div className="flex flex-col gap-2">
                                                            <div>User {request.requester_id} is requesting access to group {request.group_id}</div>

                                                            <div className="flex gap-2">
                                                                <Button variant="outline">
                                                                    Approve
                                                                </Button>
                                                                <Button variant="outline">
                                                                    Reject
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </DropdownMenuItem>
                                                )
                                            })
                                        )}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            {user && <Button variant="outline" onClick={handleLogout}>Logout</Button>}
                        </div>
                    </nav>

                    <div className="md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="hidden md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                        Home
                    </Link>
                    <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                        About
                    </Link>
                    <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                        Services
                    </Link>
                    <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                        Contact
                    </Link>
                </div>
            </div>
        </header>
    );
}