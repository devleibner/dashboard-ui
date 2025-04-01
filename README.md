## UI
npm install
npm run dev

## 2

// BetterButton.tsx

interface ButtonProps {
  //click handler
  onClick: () => void;
  // Optional text prop with a default value
  text?: string; 
}

const buttonStyles = {
  backgroundColor: "blue",
  padding: 10,
  color: "white",
};

export default function BetterButton({ onClick, text = "Click me" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={buttonStyles}
    >
      {text}
    </button>
  );
}

## 3
Handling Design Inconsistencies and Mobile Responsiveness

1. Schedule a quick sync with the designer to collaboratively review the inconsistencies (e.g., spacing, fonts) using the design file as a reference. 
2. Clarify questions to determine if these were intentional (e.g., for visual hierarchy) or oversights. For mobile responsiveness, I’d propose a mobile-first approach, discussing breakpoints and flexible layouts (e.g., CSS Grid/Flexbox). 
3. If the project is missing a design system, I’d suggest creating reusable UI components with consistent spacing tokens and typography scales. 
4. I would propose for early prototyping to test responsive behavior together, ensuring the design translates functionally across devices while maintaining aesthetic intent.