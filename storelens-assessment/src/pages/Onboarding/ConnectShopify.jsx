import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, ShieldCheck, ArrowRight, X } from 'lucide-react';
import Button from '../../components/Button/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/Card/Card';
import styles from './Onboarding.module.css';

const ConnectShopify = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Card className={styles.onboardingCard}>
        <CardContent style={{ padding: 'var(--spacing-8)' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-6)' }}>
             <div className={styles.iconCircle}>
               <ShoppingCart size={32} color="var(--color-primary-600)" />
             </div>
          </div>
          
          <h2 className={styles.title}>Connect your Shopify Store</h2>
          <p className={styles.subtitle}>
            To generate personalized insights, we need to securely connect to your store.
          </p>

          <div className={styles.permissionBox}>
            <div className={styles.permissionHeader}>
              <ShieldCheck size={20} color="var(--color-success-500)" />
              <strong>Secure Connection</strong>
            </div>
            <ul className={styles.permissionList}>
              <li>We request <strong>read-only</strong> access to orders and products.</li>
              <li>We will <strong>never</strong> modify your store data.</li>
              <li>You can disconnect at any time in Settings.</li>
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', marginTop: 'var(--spacing-8)' }}>
            <Button size="lg" iconRight={<ArrowRight size={18} />} onClick={() => navigate('/import')}>
              Connect via Shopify OAuth
            </Button>
            <Button variant="ghost" iconLeft={<X size={18} />} onClick={() => alert('Are you sure? You cannot use StoreLens without connecting a store.')}>
              Skip for now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConnectShopify;
