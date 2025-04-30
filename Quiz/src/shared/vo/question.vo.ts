import type opzioneVo from "./opzione.vo";

export default interface questionVo {
    id: number;
    text: string;
    options: opzioneVo[];
}