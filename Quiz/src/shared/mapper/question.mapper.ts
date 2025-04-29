import type questionDto from "../dto/question.dto";
import type questionVo from "../vo/question.vo";
import type { MapperInterface } from "./mapper";
import type opzioneVo from "../vo/opzione.vo";
import type opzioneDto from "../dto/opzione.dto"


export default class QuestionMapper 
implements MapperInterface<questionDto,questionVo>{


    convertVoToDto(vo: questionVo): questionDto {
      let dto: questionDto = {
        id: vo.id,
        text: vo.text,
        options: vo.options
      } 
      return dto;
    }

    convertDtoToVo(dto: questionDto): questionVo{
        let vo: questionVo = {
            id: dto.id,
            text: dto.text,
            options: dto.options,
           
        } 
          return vo;
    }


}
