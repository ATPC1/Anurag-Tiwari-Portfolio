import React from 'react';
import { Calendar, Filter, Download } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import { Table, THead, TBody, TR, TH, TD, Badge } from '../../components/Table/Table';

const Reports = () => {
  // Mock data for the table
  const orders = [
    { id: '#1004', date: 'Oct 24, 2023', customer: 'Alice Smith', amount: '$124.00', status: 'Fulfilled' },
    { id: '#1005', date: 'Oct 24, 2023', customer: 'Bob Jones', amount: '$45.50', status: 'Processing' },
    { id: '#1006', date: 'Oct 23, 2023', customer: 'Charlie Brown', amount: '$299.99', status: 'Fulfilled' },
    { id: '#1007', date: 'Oct 23, 2023', customer: 'Diana Prince', amount: '$89.00', status: 'Refunded' },
    { id: '#1008', date: 'Oct 22, 2023', customer: 'Eve Adams', amount: '$150.00', status: 'Fulfilled' },
  ];

  return (
    <DashboardLayout title="Reports">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
        
        {/* Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--spacing-4)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
            <Button variant="secondary" iconLeft={<Calendar size={16} />}>Last 30 Days</Button>
            <Button variant="secondary" iconLeft={<Filter size={16} />}>Filters</Button>
          </div>
          <Button variant="primary" iconLeft={<Download size={16} />}>Export CSV</Button>
        </div>

        {/* Data Table */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent style={{ padding: 0 }}>
            <Table>
              <THead>
                <TR>
                  <TH>Order ID</TH>
                  <TH>Date</TH>
                  <TH>Customer</TH>
                  <TH>Amount</TH>
                  <TH>Status</TH>
                </TR>
              </THead>
              <TBody>
                {orders.map((order) => (
                  <TR key={order.id}>
                    <TD><strong>{order.id}</strong></TD>
                    <TD>{order.date}</TD>
                    <TD>{order.customer}</TD>
                    <TD>{order.amount}</TD>
                    <TD>
                      <Badge variant={order.status === 'Fulfilled' ? 'success' : order.status === 'Processing' ? 'warning' : 'neutral'}>
                        {order.status}
                      </Badge>
                    </TD>
                  </TR>
                ))}
              </TBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
