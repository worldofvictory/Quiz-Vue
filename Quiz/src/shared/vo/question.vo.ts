import type opzioneVo from "./opzione.vo";


export default interface questionVo {
    opzioneVo: any;
    id: number;
    text: string;
    options: opzioneVo[];
}