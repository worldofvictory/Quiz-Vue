/*

import type questionDto from "../dto/question.dto";
import type questionVo from "../vo/question.vo";
import type { MapperInterface } from "./mapper";
import type opzioneVo from "../vo/opzione.vo";
import type opzioneDto from "../dto/opzione.dto";
import opzioneMapper from "./opzione.mapper";

export default class QuestionMapper implements MapperInterface<questionDto, questionVo> {



    convertVoToDto(vo: questionVo): questionDto {
        let dtoQuestion: questionDto = {
            id: vo.id,
            text: vo.text,
            options: vo.opzioneVo(this.convertVoToDto)
        };
        return dtoQuestion;
    }

    convertDtoToVo(dto: questionDto): questionVo {
        let voQuestion: questionVo = {
            id: dto.id,
            text: dto.text,
            options: dto.opzioneDto(this.convertDtoToVo),
            
        }
               return voQuestion;
    }

    convertListVoToDto(voList: questionVo[]): questionDto[] {
        let dtoArray: questionDto[] = [];
    }

    convertListDtoToVo(dtoList: questionDto[]): questionVo[] {
       let voArray: questionVo = new Array;
    }
}*/
