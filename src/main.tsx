import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './contexts/theme-context'
import { SpectrumScaleProvider } from './contexts/SpectrumScaleContext'
import './index.css'
import App from './App.tsx'

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
