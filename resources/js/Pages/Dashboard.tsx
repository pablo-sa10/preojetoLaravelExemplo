import DatePicker from '@/components/date-picker';
import { Layout } from '@/components/layout';
import { Activity, CreditCard, DollarSign, Filter, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SummaryCard from '@/components/summary-card';
import Chart from '@/components/chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const summaryData = [
    { title: "Total Revenue", icon: DollarSign, value: "R$45.231,89" },
    { title: "Subscriptions", icon: Users, value: "+2350" },
    { title: "Sales", icon: CreditCard, value: "+12.234" },
    { title: "Active Now", icon: Activity, value: "+573" },
]

const Dashboard = () => {
    return <Layout>
        <div className='flex items-end justify-between mb-7'>
            <h1 className='text-3xl font-bold'>Dashboard</h1>

            <div className='flex items-center gap-2'>
                <DatePicker />
                <Button>
                    <Filter className='2-4 h-4 mr-1' /> Filtro
                </Button>
            </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {summaryData.map((item) => (
                <SummaryCard
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    value={item.value}
                />
            ))}
        </div>

        <div className='mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <Chart />

            <Card>
                <CardHeader>
                    <CardTitle>Vendas Recentes</CardTitle>
                    <CardDescription>Você fez 256 vendas</CardDescription>
                </CardHeader>
                <CardContent>
                    
                </CardContent>
            </Card>
        </div>

    </Layout>
}

export default Dashboard;