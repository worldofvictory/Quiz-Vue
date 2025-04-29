
import type questionDto from "./question.dto";

export default interface cardDto {
    id: number;
    img: string;
    name: string;
    questions: questionDto[];
}