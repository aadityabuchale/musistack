'use client';

import { useEffect } from 'react';

export default function RemoveExtensionAttributes() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    // Remove common extension attributes
    html.removeAttribute('coupert-item');
    html.removeAttribute('foxified');
    body.removeAttribute('data-new-gr-c-s-check-loaded');
    body.removeAttribute('data-gr-ext-installed');

    // You can add more if needed

    if (typeof window !== 'undefined') {
        console.log('This runs only on the client');
      }
  }, []);

  return null;
}
