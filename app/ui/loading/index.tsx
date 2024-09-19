'use client'
import { useEffect, useRef } from 'react';
import LoaderIcon from './LoadingPartially.json';
import lottie from 'lottie-web';
export default function LoadingPartially() {
    const container = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (lottie && container.current) {
            const animation = lottie.loadAnimation({
                container: container.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: LoaderIcon,
            });
            return () => animation.destroy();
        }
    }, []);

    return (
        <div
            className="fixed top-0 left-0 w-full h-full z-[1100] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
            ref={container}
        />
    );
}