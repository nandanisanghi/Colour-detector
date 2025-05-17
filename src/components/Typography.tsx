
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Theme } from '@/pages/Index';

interface TypographyProps {
  theme: Theme;
}

export const Typography = ({ theme }: TypographyProps) => {
  const headingFont = theme.typography.headingFont;
  const bodyFont = theme.typography.bodyFont;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Typography</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="text-sm text-muted-foreground mb-2">Heading Font</div>
          <div className="font-heading font-semibold">
            <div className="text-3xl" style={{ fontFamily: headingFont }}>{headingFont}</div>
            <div className="text-sm text-muted-foreground mt-1">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
            <div className="text-sm text-muted-foreground">abcdefghijklmnopqrstuvwxyz 0123456789</div>
          </div>
        </div>
        
        <div>
          <div className="text-sm text-muted-foreground mb-2">Body Font</div>
          <div>
            <div className="text-xl" style={{ fontFamily: bodyFont }}>{bodyFont}</div>
            <div className="text-sm text-muted-foreground mt-1">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
            <div className="text-sm text-muted-foreground">abcdefghijklmnopqrstuvwxyz 0123456789</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">Type Scale</div>
          <div className="font-heading" style={{ fontFamily: headingFont }}>
            <div className="text-4xl font-bold">Heading 1</div>
            <div className="text-3xl font-bold">Heading 2</div>
            <div className="text-2xl font-bold">Heading 3</div>
            <div className="text-xl font-bold">Heading 4</div>
          </div>
          <div className="space-y-2 mt-4" style={{ fontFamily: bodyFont }}>
            <p className="text-base">This is body text. It should be readable and have good contrast against the background.</p>
            <p className="text-sm">This is smaller body text, good for captions and secondary information.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
