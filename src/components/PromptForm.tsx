
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Wand2 } from 'lucide-react';

interface PromptFormProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
  defaultPrompt: string;
}

const PromptForm = ({ onSubmit, isLoading, defaultPrompt }: PromptFormProps) => {
  const [prompt, setPrompt] = useState(defaultPrompt);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="flex gap-2">
        <Input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your desired theme..."
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading || !prompt.trim()}>
          <Wand2 className="mr-2 h-4 w-4" />
          {isLoading ? 'Generating...' : 'Generate'}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground mt-2">
        Try: "Modern banking app theme" or "Crypto dashboard with purple accents"
      </p>
    </form>
  );
};

export default PromptForm;
