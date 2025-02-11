import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { router } from "@inertiajs/react";
import { AlertDialogProps } from "@radix-ui/react-alert-dialog"

const LogoutAlert = ({ onOpenChange, ...props }: AlertDialogProps) => {

    const handleLougt = () => {
        if(onOpenChange) onOpenChange(false);
        router.get("/login");
    }

    return <AlertDialog onOpenChange={onOpenChange} {...props}>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                    className="bg-destructive hover:bg-destructive/80"
                    onClick={handleLougt}
                >Continue
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
}

export default LogoutAlert
