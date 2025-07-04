import * as ToastPrimitive from "@radix-ui/react-toast";

export const Toast = ({ title, content, children, ...props }: {
    title?: string;
    content: string;
    children?: React.ReactNode;
} & React.ComponentProps<typeof ToastPrimitive.Root>) => {
    return (
        <ToastPrimitive.Root {...props}>
            {title && <ToastPrimitive.Title>{title}</ToastPrimitive.Title>}
            <ToastPrimitive.Description>{content}</ToastPrimitive.Description>
            {children && (
                <ToastPrimitive.Action asChild altText="Action">
                    {children}
                </ToastPrimitive.Action>
            )}
            <ToastPrimitive.Close aria-label="Close">
                <span aria-hidden>×</span>
            </ToastPrimitive.Close>
        </ToastPrimitive.Root>
    );
};