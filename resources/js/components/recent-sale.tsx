import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Slash } from "lucide-react";

const sales = [
    {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        paidAmount: "100,00",
        avatar: "AJ",
    },
    {
        name: "Bob Smith",
        email: "bob.smith@example.com",
        paidAmount: "520,00",
        avatar: "BS",
    },
    {
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        paidAmount: "275,00",
        avatar: "CB",
    },
    {
        name: "David Lee",
        email: "david.lee@example.com",
        paidAmount: "120,00",
        avatar: "DL",
    },
    {
        name: "Emily Wilson",
        email: "emily.wilson@example.com",
        paidAmount: "190,00",
        avatar: "EW",
    },
    {
        name: "Frank Miller",
        email: "frank.miller@example.com",
        paidAmount: "160,00",
        avatar: "FM",
    },
]

const RecentSales = () => {
    return (
        <div className="space-y-8">
            {sales.map((sale) => (
                <div key={sale.name} className="flex items-center">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="" alt="Avatar"/>
                        <AvatarFallback>{sale.avatar}</AvatarFallback>
                    </Avatar>

                    <div className="ml-4 space-y-1 text-sm">
                        <p className="font-medium leading-none">{sale.name}</p>
                        <p className="text-muted-foreground">{sale.email}</p>
                    </div>
                    <div className="ml-auto font-medium">
                        R${sale.paidAmount}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RecentSales
