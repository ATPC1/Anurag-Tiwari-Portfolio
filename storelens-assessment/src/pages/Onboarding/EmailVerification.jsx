import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MailCheck, RefreshCw, XCircle } from 'lucide-react';
import Button from '../../components/Button/Button';
import { Card, CardContent } from '../../components/Card/Card';
import styles from './Auth.module.css';

const EmailVerification = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState('loading'); // loading, success, error
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // Simulate verification process
    const timer = setTimeout(() => {
      // Simulate success for now, but could randomly fail to show error state
      setStatus('success');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (status === 'success') {
      const redirectTimer = setInterval(() => {
        setCountdown((c) => {
          if (c <= 1) {
            clearInterval(redirectTimer);
            navigate('/connect');
            return 0;
          }
          return c - 1;
        });
      }, 1000);
      return () => clearInterval(redirectTimer);
    }
  }, [status, navigate]);

  return (
    <div className={styles.container}>
      <Card className={styles.authCard}>
        <CardContent style={{ textAlign: 'center', padding: 'var(--spacing-8)' }}>
          {status === 'loading' && (
            <>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-6)' }}>
                <RefreshCw size={48} className="animate-spin" color="var(--color-primary-500)" style={{ animation: 'spin 1s linear infinite' }} />
              </div>
              <h2 className={styles.title}>Verifying your email</h2>
              <p className={styles.subtitle}>Please wait while we confirm your email address...</p>
            </>
          )}

          {status === 'success' && (
            <div className="animate-fade-in">
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-6)' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: 'var(--color-success-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MailCheck size={32} color="var(--color-success-500)" />
                </div>
              </div>
              <h2 className={styles.title}>Email Verified!</h2>
              <p className={styles.subtitle}>Your account is ready.</p>
              <p style={{ marginTop: 'var(--spacing-4)', color: 'var(--color-text-tertiary)', fontSize: 'var(--text-sm)' }}>
                Redirecting you to the next step in {countdown}...
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="animate-fade-in">
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-6)' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: 'var(--color-error-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <XCircle size={32} color="var(--color-error-500)" />
                </div>
              </div>
              <h2 className={styles.title}>Verification Link Expired</h2>
              <p className={styles.subtitle}>This link is no longer valid or has already been used.</p>
              <Button style={{ marginTop: 'var(--spacing-6)', width: '100%' }}>
                Resend Verification Email
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}} />
    </div>
  );
};

export default EmailVerification;
