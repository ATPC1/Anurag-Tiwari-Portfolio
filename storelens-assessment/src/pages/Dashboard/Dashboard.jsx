import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight, Lightbulb, RefreshCw, CheckCircle2, PlayCircle, ExternalLink, X } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Progress from '../../components/Progress/Progress';
import { useAppContext } from '../../context/AppContext';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const { hasCompletedTour, setHasCompletedTour } = useAppContext();
  const [showTooltip, setShowTooltip] = useState(true);

  if (!hasCompletedTour) {
    return (
      <DashboardLayout title="Welcome to StoreLens">
        <div className={styles.grid}>
          {/* Empty State / Guided Checklist */}
          <div className={styles.colSpan8}>
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Let's get you set up</CardTitle>
              </CardHeader>
              <CardContent>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-6)' }}>
                  Your store is connected, but we need a bit more info to unlock all features. Complete these steps to start generating insights.
                </p>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)', marginBottom: 'var(--spacing-6)' }}>
                  <Progress value={25} style={{ flex: 1 }} />
                  <span style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>1 of 4 completed</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                  {/* Task 1 (Done) */}
                  <div style={{ display: 'flex', gap: 'var(--spacing-3)', opacity: 0.6 }}>
                    <CheckCircle2 size={24} color="var(--color-success-500)" />
                    <div>
                      <h4 style={{ margin: 0, fontSize: 'var(--text-base)' }}>Connect Shopify</h4>
                      <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>Successfully synced historical data.</p>
                    </div>
                  </div>
                  
                  {/* Task 2 (Active) */}
                  <div style={{ display: 'flex', gap: 'var(--spacing-3)', padding: 'var(--spacing-3)', backgroundColor: 'var(--color-surface-raised)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-focus)' }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid var(--color-primary-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', color: 'var(--color-primary-500)' }}>2</div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: 0, fontSize: 'var(--text-base)' }}>Set a Revenue Goal</h4>
                      <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>Help us understand what you're aiming for this month.</p>
                      <Button size="sm" style={{ marginTop: 'var(--spacing-3)' }} onClick={() => setHasCompletedTour(true)}>
                        Set Goal & Finish Tour
                      </Button>
                    </div>
                  </div>

                  {/* Task 3 (Upcoming) */}
                  <div style={{ display: 'flex', gap: 'var(--spacing-3)', opacity: 0.6 }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid var(--color-border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: 'var(--color-text-tertiary)' }}>3</div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: 'var(--text-base)' }}>Invite Team Members</h4>
                      <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>Bring your marketing team on board.</p>
                    </div>
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>

          <div className={styles.colSpan4}>
             <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
               <CardHeader><CardTitle>Educational Resources</CardTitle></CardHeader>
               <CardContent style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                 <div style={{ display: 'flex', gap: 'var(--spacing-3)', cursor: 'pointer' }}>
                   <PlayCircle size={32} color="var(--color-primary-500)" />
                   <div>
                     <h4 style={{ margin: 0, fontSize: 'var(--text-sm)' }}>How to read your Insights</h4>
                     <p style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)' }}>3 min video</p>
                   </div>
                 </div>
                 <div style={{ display: 'flex', gap: 'var(--spacing-3)', cursor: 'pointer' }}>
                   <ExternalLink size={24} color="var(--color-text-tertiary)" style={{ margin: '4px' }} />
                   <div>
                     <h4 style={{ margin: 0, fontSize: 'var(--text-sm)' }}>Understanding LTV vs CAC</h4>
                     <p style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)' }}>Read article</p>
                   </div>
                 </div>
               </CardContent>
             </Card>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  // Populated Dashboard State
  return (
    <DashboardLayout title="Overview">
      {/* Interactive Tooltip Simulation */}
      {showTooltip && (
        <div className="animate-fade-in" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ position: 'absolute', top: -10, left: 24, width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '10px solid var(--color-primary-600)' }} />
          <div style={{ backgroundColor: 'var(--color-primary-600)', color: 'white', padding: 'var(--spacing-4)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--spacing-6)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', boxShadow: 'var(--shadow-md)' }}>
            <div>
              <h4 style={{ margin: 0, marginBottom: 'var(--spacing-1)' }}>New: Actionable Insights</h4>
              <p style={{ margin: 0, fontSize: 'var(--text-sm)', opacity: 0.9 }}>This box will automatically highlight your most urgent metrics and tell you how to fix them.</p>
            </div>
            <button onClick={() => setShowTooltip(false)} style={{ color: 'white', opacity: 0.7, cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      <div className={styles.insightBox}>
        <div className={styles.insightIcon}><Lightbulb size={24} /></div>
        <div className={styles.insightText}>
          <div className={styles.insightTitle}>Actionable Insight: Cart Abandonment Spiked</div>
          <div className={styles.insightDesc}>
            Your cart abandonment rate on mobile devices increased to 72% yesterday. We recommend enabling the "Mobile Recovery SMS" sequence to capture these lost sales.
          </div>
        </div>
        <Button variant="primary" size="sm">Enable SMS</Button>
      </div>

      <div className={styles.grid}>
        {/* Metric Cards */}
        <div className={styles.colSpan4}>
          <Card>
            <CardHeader><CardTitle>Total Revenue</CardTitle></CardHeader>
            <CardContent>
              <div className={styles.metricValue}>$12,450.00</div>
              <div className={`${styles.trend} ${styles.trendUp}`}>
                <ArrowUpRight size={16} /> 12.5% vs last week
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className={styles.colSpan4}>
          <Card>
            <CardHeader><CardTitle>Conversion Rate</CardTitle></CardHeader>
            <CardContent>
              <div className={styles.metricValue}>3.2%</div>
              <div className={`${styles.trend} ${styles.trendDown}`}>
                <ArrowDownRight size={16} /> 0.4% vs last week
              </div>
            </CardContent>
          </Card>
        </div>

        <div className={styles.colSpan4}>
          <Card>
            <CardHeader><CardTitle>Average Order Value</CardTitle></CardHeader>
            <CardContent>
              <div className={styles.metricValue}>$84.50</div>
              <div className={`${styles.trend} ${styles.trendUp}`}>
                <ArrowUpRight size={16} /> 2.1% vs last week
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chart Area Simulation */}
        <div className={styles.colSpan8}>
          <Card style={{ height: '100%' }}>
            <CardHeader>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <CardTitle>Revenue Over Time</CardTitle>
                <Button variant="ghost" size="sm" iconLeft={<RefreshCw size={14} />}>Refresh</Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Simulating a chart with CSS */}
              <div style={{ height: '240px', display: 'flex', alignItems: 'flex-end', gap: '8px', paddingTop: '20px' }}>
                {[40, 60, 45, 80, 55, 90, 75].map((h, i) => (
                  <div key={i} style={{ flex: 1, backgroundColor: 'var(--color-primary-100)', height: `${h}%`, borderRadius: '4px 4px 0 0', position: 'relative', transition: 'height 1s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                    <div style={{ position: 'absolute', bottom: '0', width: '100%', height: '4px', backgroundColor: 'var(--color-primary-500)', borderRadius: '4px 4px 0 0' }} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Products */}
        <div className={styles.colSpan4}>
          <Card style={{ height: '100%' }}>
            <CardHeader><CardTitle>Top Products</CardTitle></CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { name: 'Organic Face Serum', sales: 124 },
                  { name: 'Hydrating Cleanser', sales: 98 },
                  { name: 'Vitamin C Toner', sales: 76 }
                ].map((p, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: i !== 2 ? '1px solid var(--color-border-subtle)' : 'none', paddingBottom: i !== 2 ? '0.5rem' : '0' }}>
                    <span style={{ fontWeight: 500, fontSize: 'var(--text-sm)' }}>{p.name}</span>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>{p.sales} sales</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" style={{ width: '100%' }}>View all products</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
