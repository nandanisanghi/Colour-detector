
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Theme } from '@/pages/Index';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, CreditCard, DollarSign, LineChart, Wallet, Users } from 'lucide-react';

interface ThemePreviewProps {
  theme: Theme;
}

const ThemePreview = ({ theme }: ThemePreviewProps) => {
  // Dynamic styling based on theme
  const styles = {
    card: {
      backgroundColor: theme.colors.card,
      borderColor: theme.colors.border,
      color: theme.colors.foreground,
    },
    headingFont: {
      fontFamily: theme.typography.headingFont,
    },
    bodyFont: {
      fontFamily: theme.typography.bodyFont,
    },
    badge: {
      backgroundColor: `${theme.colors.accent}30`,
      color: theme.colors.accent,
    },
    chart: {
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.border,
    },
    primary: {
      backgroundColor: theme.colors.primary,
      color: '#ffffff',
    },
    secondary: {
      backgroundColor: theme.colors.secondary,
      color: '#ffffff',
    },
    muted: {
      backgroundColor: theme.colors.muted,
      color: theme.colors.foreground,
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Theme Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          className="rounded-lg border p-6 overflow-hidden"
          style={{
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.border,
            color: theme.colors.foreground,
            ...styles.bodyFont
          }}
        >
          <header className="mb-6">
            <h2 className="text-2xl font-bold mb-2" style={styles.headingFont}>
              Finance Dashboard
            </h2>
            <div className="flex items-center justify-between">
              <p className="text-sm" style={{ color: theme.colors.foreground }}>
                Welcome back, Alex
              </p>
              <Badge style={styles.badge}>Premium</Badge>
            </div>
          </header>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="rounded-md p-4" style={{ backgroundColor: theme.colors.card, borderColor: theme.colors.border }}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm" style={{ color: `${theme.colors.foreground}80` }}>Balance</span>
                <Wallet className="h-4 w-4" style={{ color: theme.colors.primary }} />
              </div>
              <div className="text-xl font-semibold">$12,580.00</div>
            </div>
            
            <div className="rounded-md p-4" style={{ backgroundColor: theme.colors.card, borderColor: theme.colors.border }}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm" style={{ color: `${theme.colors.foreground}80` }}>Income</span>
                <DollarSign className="h-4 w-4" style={{ color: theme.colors.accent }} />
              </div>
              <div className="text-xl font-semibold">$4,320.00</div>
            </div>
            
            <div className="rounded-md p-4" style={{ backgroundColor: theme.colors.card, borderColor: theme.colors.border }}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm" style={{ color: `${theme.colors.foreground}80` }}>Expenses</span>
                <CreditCard className="h-4 w-4" style={{ color: theme.colors.primary }} />
              </div>
              <div className="text-xl font-semibold">$2,170.00</div>
            </div>
          </div>
          
          <div className="rounded-md mb-6 p-5" style={styles.card}>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium" style={styles.headingFont}>Portfolio Performance</h3>
              <LineChart className="h-4 w-4" style={{ color: theme.colors.primary }} />
            </div>
            <div className="h-32 flex items-end justify-between px-2 pt-2" style={styles.chart}>
              {[40, 25, 60, 35, 55, 30, 70, 45, 65, 50, 75].map((value, index) => (
                <div 
                  key={index}
                  className="w-[5%] rounded-t transition-all hover:opacity-80"
                  style={{
                    height: `${value}%`,
                    backgroundColor: theme.colors.primary
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs" style={{ color: `${theme.colors.foreground}80` }}>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button style={styles.primary}>
              <ArrowUpRight className="mr-2 h-4 w-4" />
              Invest Now
            </Button>
            <Button variant="outline" style={{ borderColor: theme.colors.border }}>
              View Transactions
            </Button>
            <Button style={styles.secondary}>
              <Users className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThemePreview;
