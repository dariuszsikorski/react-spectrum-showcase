import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './contexts/theme-context'
import { SpectrumScaleProvider } from './contexts/SpectrumScaleContext'
import { ResponsiveManager } from './lib/ui-responsive'
import './index.css'
import App from './App.tsx'

// Initialize responsive manager before React renders
const responsiveManager = ResponsiveManager.getInstance({
  minScale: 0.5,
  maxScale: 2.0
});
responsiveManager.initialize();

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <SpectrumScaleProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </SpectrumScaleProvider>
    </StrictMode>,
  );
}
