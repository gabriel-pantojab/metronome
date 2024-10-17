import { TAK_FREQUENCY, TIK_FREQUENCY } from '../constants/metronome';

const audioContext = new window.AudioContext();

function createSound(frequency: number, duration: number = 0.07) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

    gainNode.gain.setValueAtTime(1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
}

export function playTik() {
    createSound(TIK_FREQUENCY);
}

export function playTak() {
    createSound(TAK_FREQUENCY);
}
