import style from './bpm-controls.module.css';

interface BpmControlsProps {
    bpm: number;
    setBpm: (value: number) => void;
}

export function BpmControls({ bpm, setBpm }: BpmControlsProps) {
    const incrementBpm = () => setBpm(bpm + 1);
    const decrementBpm = () => setBpm(bpm - 1);

    return (
        <div className={style.bpmControls}>
            <button className={`${style.button} ${style.primaryButton}`} onClick={incrementBpm}>
                -
            </button>

            <input
                style={{ width: '100%' }}
                type="range"
                name="bpm"
                id="bpm"
                min="1"
                max="240"
                step={1}
                value={bpm}
                onChange={(e) => setBpm(Number(e.target.value))}
            />

            <button className={`${style.button} ${style.primaryButton}`} onClick={decrementBpm}>
                +
            </button>
        </div>
    );
}
