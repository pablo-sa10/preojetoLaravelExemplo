import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {
    title: string;
    icon: LucideIcon;
    value: string;
}

const SummaryCard = ({ title, icon: Icon, value }: Props) => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>

            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground">
                    +20,1% do último mês
                </p>
            </CardContent>
        </Card>
    )
}

export default SummaryCard
