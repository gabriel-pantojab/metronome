import { useEffect, useState } from 'react';

import { BpmControls } from '@components/bpm-controls/bpm-controls';
import { Beat } from '@components/beat/beat';

import { playTak, playTik } from '@utils/sounds';

import style from './metronome.module.css';

export function Metronome() {
    const [bpm, setBpm] = useState<number>(60);
    const [beat, setBeat] = useState<number>(1);
    const [playing, setPlaying] = useState<boolean>(false);

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
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
    }, [playing, bpm]);

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
                <button
                    className={`${style.button} ${playing ? style.stopButton : style.startButton}`}
                    onClick={handlePlay}>
                    {playing ? 'Stop' : 'Start'}
                </button>
            </div>
        </section>
    );
}
