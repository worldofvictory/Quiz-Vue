import type opzioneDto from "./opzione.dto";

export default interface questionDto {
    id: number;
    text: string;
    options: opzioneDto[];
}