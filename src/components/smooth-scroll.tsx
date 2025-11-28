"use client";

import { ReactLenis } from '@studio-freight/react-lenis'
import { useEffect, useState } from 'react';

export function SmoothScroll({ children }: { children?: React.ReactNode }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return <>{children}</>;

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
            {children}
        </ReactLenis>
    );
}
