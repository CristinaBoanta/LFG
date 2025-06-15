import type { JSX } from "react";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/Card/Card"
import { Button } from "../../components/Button/Button";

export const Homepage = (): JSX.Element => {
    return (
        <div className="min-h-screen flex flex-col items-center p-4">
            <div className="flex-grow w-full max-w-7xl">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 py-8">
                        <Button variant="outline">Most Popular</Button>
                        <Button variant="outline">Custom</Button>
                    </div>
                    <div>
                        <Button variant="outline">Create a new group</Button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((card) => {
                        return (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Card Title</CardTitle>
                                    <CardDescription>Card Description</CardDescription>
                                    <CardAction>Card Action</CardAction>
                                </CardHeader>
                                <CardContent>
                                    <p>Card Content</p>
                                </CardContent>
                                <CardFooter>
                                    <p>Card Footer</p>
                                </CardFooter>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};