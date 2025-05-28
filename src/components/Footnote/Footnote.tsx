// components/Footnote.tsx
import { useContext, createContext, useState, ReactNode } from 'react';

// Context to manage footnotes
const FootnoteContext = createContext<{
  addFootnote: (text: string) => number;
  notes: string[];
} | null>(null);

export function FootnoteProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<string[]>([]);

  const addFootnote = (text: string) => {
    setNotes((prev) => [...prev, text]);
    return notes.length + 1;
  };

  return (
    <FootnoteContext.Provider value={{ addFootnote, notes }}>
      {children}
      {notes.length > 0 && (
        <div style={{ marginTop: '4rem', borderTop: '1px solid #ccc' }}>
          <h4>Footnotes</h4>
          <ol>
            {notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ol>
        </div>
      )}
    </FootnoteContext.Provider>
  );
}

export function Footnote({ text }: { text: string }) {
  const context = useContext(FootnoteContext);
  if (!context) {
    throw new Error('Footnote must be used inside FootnoteProvider');
  }

  const id = context.addFootnote(text);

  return <sup>[{id}]</sup>;
}
