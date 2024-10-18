import { useEffect, useState } from 'react';

import { playTak, playTik } from '@/utils/sounds';

export default function useMetronome() {
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

    const togglePlaying = () => {
        setPlaying((prevPlaying) => {
            if (prevPlaying) {
                setBeat(1);
            }
            return !prevPlaying;
        });
    };

    return { bpm, beat, playing, setBpm, togglePlaying };
}
