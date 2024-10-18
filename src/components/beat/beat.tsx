import style from './beat.module.css';

interface BeatProps {
    color: string;
    active: boolean;
}

export function Beat({ color, active }: BeatProps) {
    return (
        <div
            className={style.beat}
            style={{
                backgroundColor: active ? color : '#343434',
            }}></div>
    );
}
