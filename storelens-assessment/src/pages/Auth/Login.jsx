import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, LineChart } from 'lucide-react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { Card, CardContent } from '../../components/Card/Card';
import { useAppContext } from '../../context/AppContext';
import styles from './Auth.module.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAppContext();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate validation and login
    setTimeout(() => {
      setIsLoading(false);
      if (email === 'error@test.com') {
        setError('Invalid email or password. Please try again.');
        return;
      }
      login();
      navigate('/dashboard'); // Goes to dashboard or wherever onboarding left off
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <Card className={styles.authCard}>
        <CardContent>
          <div className={styles.header}>
            <div className={styles.logo}>
              <LineChart size={24} />
              StoreLens
            </div>
            <h1 className={styles.title}>Welcome back</h1>
            <p className={styles.subtitle}>Log in to your account</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <Input 
              label="Email" 
              type="email" 
              placeholder="you@company.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              iconLeft={<Mail size={18} />}
              required 
            />
            
            <Input 
              label="Password" 
              type={showPassword ? "text" : "password"}
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              iconLeft={<Lock size={18} />}
              iconRight={
                <div onClick={() => setShowPassword(!showPassword)} style={{cursor: 'pointer'}}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </div>
              }
              required 
            />
            
            {error && <p className={styles.errorText} style={{ color: 'var(--color-error-500)', fontSize: 'var(--text-sm)' }}>{error}</p>}
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 'var(--text-sm)', marginTop: '-8px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#forgot" style={{ color: 'var(--color-primary-600)', fontWeight: 500 }}>Forgot password?</a>
            </div>

            <Button type="submit" size="lg" isLoading={isLoading} style={{ width: '100%', marginTop: '1rem' }}>
              Log In
            </Button>
          </form>

          <p className={styles.footer} style={{ marginTop: '2rem' }}>
            Don't have an account? <a href="/signup" onClick={(e) => { e.preventDefault(); navigate('/signup'); }}>Sign up</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
