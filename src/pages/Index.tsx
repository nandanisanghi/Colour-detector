
import React, { useState } from 'react';
import AppHeader from '@/components/AppHeader';
import ColorPalette from '@/components/ColorPalette';
import { Typography } from '@/components/Typography';
import ThemePreview from '@/components/ThemePreview';
import PromptForm from '@/components/PromptForm';
import { toast } from "sonner";

export type Theme = {
  name: string;
  colors: {
    background: string;
    foreground: string;
    primary: string;
    secondary: string;
    accent: string;
    muted: string;
    card: string;
    border: string;
  };
  typography: {
    headingFont: string;
    bodyFont: string;
  };
};

const defaultTheme: Theme = {
  name: "Dark Fintech",
  colors: {
    background: "#0f172a",
    foreground: "#f8fafc",
    primary: "#0ea5e9",
    secondary: "#475569",
    accent: "#3b82f6",
    muted: "#334155",
    card: "#1e293b",
    border: "#334155"
  },
  typography: {
    headingFont: "Poppins",
    bodyFont: "Inter"
  }
};

const Index = () => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [generatedThemes, setGeneratedThemes] = useState<Theme[]>([]);

  const handlePromptSubmit = async (userPrompt: string) => {
    setIsGenerating(true);
    setPrompt(userPrompt);
    
    try {
      // In a real app, this would make an API call to a generative AI model
      // For now we'll simulate a response with predefined themes
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock generated themes based on the prompt
      const themes: Theme[] = [
        {
          name: "Midnight Finance",
          colors: {
            background: "#121212",
            foreground: "#f5f5f5",
            primary: "#38bdf8",
            secondary: "#1e293b",
            accent: "#818cf8",
            muted: "#334155",
            card: "#1e1e1e",
            border: "#2a2a2a"
          },
          typography: {
            headingFont: "Poppins",
            bodyFont: "Inter"
          }
        },
        {
          name: "Deep Ocean",
          colors: {
            background: "#0f1729",
            foreground: "#e2e8f0",
            primary: "#06b6d4",
            secondary: "#334155",
            accent: "#3b82f6",
            muted: "#1e293b",
            card: "#162032",
            border: "#1e293b"
          },
          typography: {
            headingFont: "Poppins",
            bodyFont: "Inter"
          }
        },
        {
          name: "Corporate Night",
          colors: {
            background: "#09090b",
            foreground: "#fafafa",
            primary: "#22c55e",
            secondary: "#27272a",
            accent: "#a855f7",
            muted: "#27272a",
            card: "#18181b",
            border: "#27272a"
          },
          typography: {
            headingFont: "Poppins",
            bodyFont: "Inter"
          }
        }
      ];
      
      setGeneratedThemes(themes);
      setTheme(themes[0]);
      toast.success("Generated new themes based on your prompt");
    } catch (error) {
      console.error("Error generating themes:", error);
      toast.error("Failed to generate themes. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const selectTheme = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
    toast.info(`Selected theme: ${selectedTheme.name}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <AppHeader />
      
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI Color Palette Designer
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Generate tailored color schemes and typography for your projects
            </p>
            
            <PromptForm 
              onSubmit={handlePromptSubmit}
              isLoading={isGenerating}
              defaultPrompt="Give me a sleek dark mode palette for a fintech dashboard."
            />
          </div>
          
          {isGenerating ? (
            <div className="flex flex-col items-center py-12">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-muted-foreground">Generating themes based on your prompt...</p>
            </div>
          ) : (
            <>
              {generatedThemes.length > 0 && (
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">Generated Themes</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {generatedThemes.map((t, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg cursor-pointer transition-all ${
                          theme.name === t.name ? 'ring-2 ring-primary' : 'hover:bg-card/80'
                        }`}
                        style={{ background: t.colors.card }}
                        onClick={() => selectTheme(t)}
                      >
                        <h3 className="font-medium mb-2" style={{ color: t.colors.foreground }}>{t.name}</h3>
                        <div className="flex flex-wrap gap-2">
                          {Object.values(t.colors).slice(0, 5).map((color, i) => (
                            <div 
                              key={i} 
                              className="w-6 h-6 rounded-full" 
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5 space-y-8">
                  <ColorPalette theme={theme} />
                  <Typography theme={theme} />
                </div>
                
                <div className="lg:col-span-7">
                  <ThemePreview theme={theme} />
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      
      <footer className="bg-card/50 border-t border-border py-6">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>AI Color Palette Designer — Create harmonious color schemes with AI</p>
          <p className="mt-2">Created with Lovable © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
