import { IconProps } from './icon-props';

export function StopIcon({ width, height }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width ?? 24}
            height={height ?? 24}
            color="white"
            fill="currentColor">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />

            <path
                d="M8 12C8 10.5 8 9.6 8.3 9.3C8.5 9 9 8.7 9.3 8.5C9.6 8.3 10.5 8 12 8C13.5 8 14.4 8.3 14.7 8.5C15 8.7 15.5 9 15.7 9.3C16 9.6 16 10.5 16 12C16 13.5 16 14.4 15.7 14.7C15.5 15 15 15.3 14.7 15.5C14.4 15.7 13.5 16 12 16C10.5 16 9.6 15.7 9.3 15.5C9 15.3 8.5 15 8.3 14.7C8 14.4 8 13.5 8 12Z"
                strokeWidth="1.5"
                fill="#343434"
            />
        </svg>
    );
}
