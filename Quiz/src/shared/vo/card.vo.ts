
import type questionVo from "./question.vo";


export default interface cardVo {
      id: number;
        img: string;
        name: string;
        questions: questionVo[];
}