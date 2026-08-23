import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card, CardContent } from '../../components/Card/Card';
import { TabsList, Tab } from '../../components/Tabs/Tabs';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Switch from '../../components/Switch/Switch';
import styles from './Settings.module.css';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState({
    email: true,
    weekly: true,
    marketing: false
  });

  return (
    <DashboardLayout title="Settings">
      <div className={styles.container}>
        <TabsList>
          <Tab active={activeTab === 'profile'} onClick={() => setActiveTab('profile')}>Profile</Tab>
          <Tab active={activeTab === 'notifications'} onClick={() => setActiveTab('notifications')}>Notifications</Tab>
          <Tab active={activeTab === 'security'} onClick={() => setActiveTab('security')}>Security</Tab>
          <Tab active={activeTab === 'billing'} onClick={() => setActiveTab('billing')}>Billing</Tab>
        </TabsList>

        {activeTab === 'profile' && (
          <div className="animate-fade-in">
            <Card>
              <CardContent className={styles.section}>
                <div>
                  <h3 className={styles.sectionTitle}>Personal Information</h3>
                  <p className={styles.sectionDesc}>Update your personal details here.</p>
                </div>
                
                <div className={styles.formGrid}>
                  <Input label="First Name" defaultValue="Sarah" />
                  <Input label="Last Name" defaultValue="Jenkins" />
                  <Input label="Email Address" type="email" defaultValue="sarah@example.com" />
                  <Input label="Role" defaultValue="Owner" disabled />
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--spacing-4)' }}>
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>

            <Card style={{ marginTop: 'var(--spacing-6)' }}>
              <CardContent className={styles.section}>
                <div>
                  <h3 className={styles.sectionTitle}>Shopify Connection</h3>
                  <p className={styles.sectionDesc}>Manage your connected store data.</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--spacing-3)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
                    <div style={{ width: 40, height: 40, backgroundColor: '#95BF47', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>S</div>
                    <div>
                      <div style={{ fontWeight: 500 }}>sarahs-boutique.myshopify.com</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-success-500)' }}>Connected & Syncing</div>
                    </div>
                  </div>
                  <Button variant="secondary" size="sm">Refresh Data</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="animate-fade-in">
            <Card>
              <CardContent className={styles.section}>
                <div>
                  <h3 className={styles.sectionTitle}>Notification Preferences</h3>
                  <p className={styles.sectionDesc}>Choose what updates you want to receive.</p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
                  <Switch 
                    label="Important Updates" 
                    description="Receive emails about critical issues with your store connection."
                    checked={notifications.email}
                    onChange={(e) => setNotifications({...notifications, email: e.target.checked})}
                  />
                  <Switch 
                    label="Weekly Insights Report" 
                    description="A summary of your store's performance every Monday."
                    checked={notifications.weekly}
                    onChange={(e) => setNotifications({...notifications, weekly: e.target.checked})}
                  />
                  <Switch 
                    label="Marketing & Features" 
                    description="Hear about new features and product updates."
                    checked={notifications.marketing}
                    onChange={(e) => setNotifications({...notifications, marketing: e.target.checked})}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="animate-fade-in">
            <Card>
              <CardContent className={styles.section}>
                <div>
                  <h3 className={styles.sectionTitle}>Update Password</h3>
                  <p className={styles.sectionDesc}>Ensure your account is using a long, random password to stay secure.</p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', maxWidth: '400px' }}>
                  <Input label="Current Password" type="password" />
                  <Input label="New Password" type="password" />
                  <Input label="Confirm New Password" type="password" />
                  <Button style={{ alignSelf: 'flex-start' }}>Update Password</Button>
                </div>
              </CardContent>
            </Card>

            <div className={styles.dangerZone} style={{ marginTop: 'var(--spacing-6)' }}>
              <h3 className={styles.dangerZoneTitle}>Delete Account</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-error-500)', marginBottom: 'var(--spacing-4)' }}>
                Permanently remove your Personal Account and all of its contents from the StoreLens platform. This action is not reversible.
              </p>
              <Button variant="danger">Delete Account</Button>
            </div>
          </div>
        )}

        {activeTab === 'billing' && (
          <div className="animate-fade-in">
            <Card>
              <CardContent className={styles.section}>
                <div>
                  <h3 className={styles.sectionTitle}>Current Plan</h3>
                  <p className={styles.sectionDesc}>You are currently on the <strong>Pro Plan</strong> ($49/mo).</p>
                </div>
                <Button variant="secondary" style={{ alignSelf: 'flex-start' }}>Manage Subscription</Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Settings;
