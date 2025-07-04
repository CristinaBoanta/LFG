import type { JSX } from "react";
import { useState } from "react";
import cn from "classnames";
import { postNewJoinRequest } from "../../lib/api/joinRequest";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "../Dialog/Dialog";
import { Button } from "../Button/Button";
import { ToastContainer, toast } from 'react-toastify';
// import { useNavigate } from "react-router-dom";

interface Group {
  _id: string;
  title: string;
  description: string;
  __v: number;
}

interface GroupListItemProps {
    className?: string;
    group: Group;
}

export const PublicGroupListItem = ({ className, group }: GroupListItemProps): JSX.Element => {

    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    const handleListGroupItemClick = async () => {
        setIsDialogOpen(true);
    };

    const postJoinRequest = async () => {
        if (isDialogOpen) {
            try {
                const response = await postNewJoinRequest(group._id);
                console.log('Response from posting a new join group request: ', response);
                setIsDialogOpen(false)

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (error: any) {
                console.log({ error })
                if (typeof error?.response?.data?.error === "string") {
                    toast.error(error?.response?.data?.message);
                }
                setIsDialogOpen(false);
            }
        }
    }

    return (
        <>
            <div className={cn("bg-gray-800 rounded-md border border-gray-700 mx-8 p-2 cursor-pointer hover:bg-gray-700 transition-all duration-300 ease-in-out hover:shadow-md dark:hover:shadow-white/20", className)}
            onClick={handleListGroupItemClick}>
            <div className="flex items-center gap-4 mx-2">
                <div className="w-10 h-10 rounded-full bg-gray-200">
                    <img src="/images/dragon.png" alt="Group Logo" className="w-full h-full object-cover p-2" />
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="text-lg font-bold">{group.title}</h3>
                    <p className="text-sm text-gray-500">{group.description}</p>
                    <div className="flex items-center gap-2">
                        <div className="text-sm text-gray-500">123 members</div>
                    </div>
                </div>
            </div>
        </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="bg-gray-800">
                    <DialogHeader>
                        <DialogTitle className="mb-4">Do you want to join {`groupName`}?</DialogTitle>
                        <DialogDescription className="flex gap-4">
                            <Button variant="outline" onClick={postJoinRequest}>
                                Join group
                            </Button>

                            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                                Cancel
                            </Button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnHover
                theme="dark" />
        </>
    );
};