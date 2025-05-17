
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Theme } from '@/pages/Index';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface ColorPaletteProps {
  theme: Theme;
}

interface ColorSampleProps {
  color: string;
  name: string;
  description: string;
}

const ColorSample = ({ color, name, description }: ColorSampleProps) => {
  const [copied, setCopied] = React.useState(false);
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success(`Copied ${text} to clipboard`);
    setTimeout(() => setCopied(false), 2000);
  };

  // Calculate contrast color (white or black) based on the background color
  const getContrastColor = (hexColor: string) => {
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    
    // Calculate luminance (perceived brightness)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    // Return white for dark colors, black for light colors
    return luminance > 0.5 ? '#000000' : '#ffffff';
  };

  const contrastColor = getContrastColor(color);

  return (
    <div 
      className="rounded-md p-4 flex justify-between items-center cursor-pointer transition-all hover:ring-2 hover:ring-primary"
      style={{ backgroundColor: color, color: contrastColor }}
      onClick={() => copyToClipboard(color)}
    >
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-sm opacity-80">{description}</div>
      </div>
      <div className="flex items-center gap-2">
        <code className="text-xs px-2 py-1 rounded" style={{ backgroundColor: `${contrastColor}20` }}>
          {color}
        </code>
        <button className="p-1 rounded-full hover:bg-white/10">
          {copied ? (
            <CheckIcon className="h-4 w-4" />
          ) : (
            <CopyIcon className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
};

const ColorPalette = ({ theme }: ColorPaletteProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Color Palette</span>
          <span className="text-sm font-normal text-muted-foreground">{theme.name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <ColorSample 
          color={theme.colors.background} 
          name="Background" 
          description="Main background color" 
        />
        <ColorSample 
          color={theme.colors.foreground} 
          name="Foreground" 
          description="Main text color" 
        />
        <ColorSample 
          color={theme.colors.primary} 
          name="Primary" 
          description="Primary actions, links" 
        />
        <ColorSample 
          color={theme.colors.secondary} 
          name="Secondary" 
          description="Secondary UI elements" 
        />
        <ColorSample 
          color={theme.colors.accent} 
          name="Accent" 
          description="Accent and highlights" 
        />
        <ColorSample 
          color={theme.colors.muted} 
          name="Muted" 
          description="Subtle backgrounds" 
        />
        <ColorSample 
          color={theme.colors.card} 
          name="Card" 
          description="Card backgrounds" 
        />
        <ColorSample 
          color={theme.colors.border} 
          name="Border" 
          description="Border color" 
        />
      </CardContent>
    </Card>
  );
};

export default ColorPalette;
