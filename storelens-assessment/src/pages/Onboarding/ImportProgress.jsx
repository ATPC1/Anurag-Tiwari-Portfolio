import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, DownloadCloud } from 'lucide-react';
import { Card, CardContent } from '../../components/Card/Card';
import Progress from '../../components/Progress/Progress';
import styles from './Onboarding.module.css';

const ImportProgress = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Connecting to Shopify API...');

  useEffect(() => {
    const steps = [
      { p: 15, text: 'Fetching historical orders (1/3)...' },
      { p: 40, text: 'Fetching historical orders (2/3)...' },
      { p: 65, text: 'Analyzing customer lifetime value...' },
      { p: 85, text: 'Generating initial insights...' },
      { p: 100, text: 'Complete!' }
    ];

    let currentStep = 0;
    
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setProgress(steps[currentStep].p);
        setStatusText(steps[currentStep].text);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => navigate('/personalize'), 1000);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <Card className={styles.onboardingCard}>
        <CardContent style={{ padding: 'var(--spacing-8)', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-6)' }}>
            <div className={styles.iconCircle} style={{ backgroundColor: progress === 100 ? 'var(--color-success-50)' : 'var(--color-primary-50)', borderColor: progress === 100 ? 'var(--color-success-100)' : 'var(--color-primary-100)' }}>
              {progress === 100 ? (
                <CheckCircle2 size={32} color="var(--color-success-500)" />
              ) : (
                <DownloadCloud size={32} color="var(--color-primary-600)" className="animate-pulse" />
              )}
            </div>
          </div>
          
          <h2 className={styles.title}>Importing your data</h2>
          <p className={styles.subtitle} style={{ marginBottom: 'var(--spacing-8)' }}>
            We're securely syncing your past 12 months of data to build your dashboard.
          </p>

          <Progress value={progress} />
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'var(--spacing-3)', fontSize: 'var(--text-sm)' }}>
            <span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>{statusText}</span>
            <span style={{ color: 'var(--color-text-tertiary)' }}>{progress}%</span>
          </div>
          
          {/* Skeletons simulating background work */}
          <div style={{ marginTop: 'var(--spacing-8)', textAlign: 'left', opacity: 0.5 }}>
            <div className="animate-shimmer" style={{ height: '20px', width: '60%', backgroundColor: 'var(--color-surface-raised)', borderRadius: '4px', marginBottom: '8px' }}></div>
            <div className="animate-shimmer" style={{ height: '20px', width: '80%', backgroundColor: 'var(--color-surface-raised)', borderRadius: '4px', marginBottom: '8px' }}></div>
            <div className="animate-shimmer" style={{ height: '20px', width: '40%', backgroundColor: 'var(--color-surface-raised)', borderRadius: '4px' }}></div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default ImportProgress;
