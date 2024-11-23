import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import '@/index.scss';
import '@fontsource/lexend/400.css';

import App from '@/App.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter
			future={{
				v7_startTransition: true,
				v7_relativeSplatPath: true,
			}}
		>
			<App />
		</BrowserRouter>
	</StrictMode>
);
