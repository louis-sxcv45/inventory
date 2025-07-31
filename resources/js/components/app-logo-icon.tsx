import { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg
            {...props}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Kotak inventory */}
            <rect x="3" y="7" width="18" height="13" rx="2" ry="2" />
            <path d="M16 3v4M8 3v4" /> {/* tutup kotak */}
            <path d="M3 11h18" /> {/* garis tengah */}
            {/* Pulpen (simbol ATK) */}
            <path d="M15 15l2 2" />
            <path d="M14.5 14.5l2-2" />
            <path d="M14.2 14.8l2 2" />
        </svg>
    );
}
