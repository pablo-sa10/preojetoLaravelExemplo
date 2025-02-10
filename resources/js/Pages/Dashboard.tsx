import DatePicker from '@/components/date-picker';
import { Layout } from '@/components/layout';
import { Activity, CreditCard, DollarSign, Filter, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const summaryData = [
    {title: "Total Revenue", icon: DollarSign, value: "R$45.231,89"},
    {title: "Subscriptions", icon: Users, value: "+2350"},
    {title: "Sales", icon: CreditCard, value: "+12.234"},
    {title: "Active Now", icon: Activity, value: "+573"},
]

const Dashboard = () => {
    return <Layout>
        <div className='flex items-end justify-between mb-7'>
            <h1 className='text-3xl font-bold'>Dashboard</h1>

            <div className='flex items-center gap-2'>
                <DatePicker />
                <Button>
                    <Filter className='2-4 h-4 mr-1'/> Filtro
                </Button>
            </div>
        </div>
    </Layout>

}

export default Dashboard;