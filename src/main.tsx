import * as Sentry from '@sentry/react';
import { App } from 'domains';
import React from 'react';
import ReactDOM from 'react-dom/client';

Sentry.init({
  dsn: 'https://c2fd28389b65abd38cb1d3b403d20184@o1330959.ingest.us.sentry.io/4506939243495424',
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.metrics.metricsAggregatorIntegration(),
    // @ts-expect-error i should find the problem here
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    // Sentry.replayIntegration({
    //   maskAllText: false,
    //   blockAllMedia: false,
    // }),
    Sentry.replayIntegration(),
  ],

  tracesSampleRate: 1.0,

  tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
