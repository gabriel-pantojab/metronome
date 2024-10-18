import { BpmControls } from '@components/bpm-controls/bpm-controls';
import { Beat } from '@components/beat/beat';
import { PlayIcon } from '@components/icons/play-icon';
import { StopIcon } from '@components/icons/stop-icon';
import useMetronome from '@/hooks/useMetronome';

import style from './metronome.module.css';

export function Metronome() {
    const { bpm, beat, playing, setBpm, togglePlaying } = useMetronome();

    return (
        <section className={style.metronome}>
            <div className={style.beats}>
                {[1, 2, 3, 4].map((i) => (
                    <Beat key={i} color={i === 1 ? 'red' : 'yellow'} active={beat === i} />
                ))}
            </div>

            <div className={style.bpm}>
                <p className={style.bpmValue}>{bpm} bpm</p>

                <BpmControls bpm={bpm} setBpm={setBpm} />
            </div>

            <div>
                <button className={style.button} onClick={togglePlaying}>
                    {!playing ? (
                        <PlayIcon width={50} height={50} />
                    ) : (
                        <StopIcon width={50} height={50} />
                    )}
                </button>
            </div>
        </section>
    );
}
