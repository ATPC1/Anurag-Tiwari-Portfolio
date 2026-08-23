import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, ArrowRight } from 'lucide-react';
import Button from '../../components/Button/Button';
import { Card, CardContent } from '../../components/Card/Card';
import Radio from '../../components/Radio/Radio';
import { useAppContext } from '../../context/AppContext';
import styles from './Onboarding.module.css';

const Personalization = () => {
  const navigate = useNavigate();
  const { setStoreConnected } = useAppContext();
  const [goal, setGoal] = useState('');

  const handleFinish = () => {
    setStoreConnected(true); // Now the app acts as if connected
    navigate('/dashboard');
  };

  return (
    <div className={styles.container}>
      <Card className={styles.onboardingCard}>
        <CardContent style={{ padding: 'var(--spacing-8)' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-6)' }}>
             <div className={styles.iconCircle}>
               <Target size={32} color="var(--color-primary-600)" />
             </div>
          </div>
          
          <h2 className={styles.title}>Tailor your experience</h2>
          <p className={styles.subtitle}>
            What is your primary goal with StoreLens? We'll customize your dashboard based on this.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-8)' }}>
            <Radio 
              name="goal" 
              value="revenue" 
              checked={goal === 'revenue'} 
              onChange={() => setGoal('revenue')}
              label="Increase overall revenue"
              description="Focus on AOV, conversion rates, and total sales."
            />
            <Radio 
              name="goal" 
              value="retention" 
              checked={goal === 'retention'} 
              onChange={() => setGoal('retention')}
              label="Improve customer retention"
              description="Focus on LTV, repeat purchase rate, and churn."
            />
            <Radio 
              name="goal" 
              value="marketing" 
              checked={goal === 'marketing'} 
              onChange={() => setGoal('marketing')}
              label="Optimize marketing spend"
              description="Focus on CAC, ROAS, and channel performance."
            />
          </div>

          <Button 
            size="lg" 
            style={{ width: '100%' }} 
            disabled={!goal} 
            iconRight={<ArrowRight size={18} />}
            onClick={handleFinish}
          >
            Go to Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Personalization;
