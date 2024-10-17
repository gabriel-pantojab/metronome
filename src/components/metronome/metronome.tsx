import { useEffect, useState } from 'react';

import style from './metronome.module.css';
import { playTak, playTik } from '../../utils/sounds';

export function Metronome() {
    const [bpm, setBpm] = useState<number>(60);
    const [beat, setBeat] = useState<number>(1);
    const [playing, setPlaying] = useState<boolean>(false);

    useEffect(() => {
        let timer: number | null = null;
        if (playing) {
            timer = setInterval(() => {
                setBeat((prevBeat) => {
                    const nextBeat = prevBeat + 1 > 4 ? 1 : prevBeat + 1;
                    if (nextBeat === 1) {
                        playTik();
                    } else {
                        playTak();
                    }
                    return nextBeat;
                });
            }, 60000 / bpm);
        } else {
            if (timer) clearInterval(timer);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [playing, bpm, 4]);

    const handlePlay = () => {
        setPlaying((prevPlaying) => {
            if (prevPlaying) {
                setBeat(1);
            }
            return !prevPlaying;
        });
    };

    return (
        <section className={style.metronome}>
            <div className={style.beat}>
                {
                    <span style={beat === 1 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>
                        {beat}
                    </span>
                }
            </div>

            <div className={style.bpm}>
                <p className={style.bpmValue}>{bpm} bpm</p>

                <div className={style.bpmControls}>
                    <button className={style.button} onClick={() => setBpm(bpm - 1)}>
                        -
                    </button>

                    <input
                        type="range"
                        name="bpm"
                        id="bpm"
                        min="1"
                        max="240"
                        value={bpm}
                        onChange={(e) => setBpm(Number(e.target.value))}
                    />

                    <button className={style.button} onClick={() => setBpm(bpm + 1)}>
                        +
                    </button>
                </div>
            </div>

            <div>
                <button className={style.button} onClick={handlePlay}>
                    {playing ? 'Stop' : 'Start'}
                </button>
            </div>
        </section>
    );
}
