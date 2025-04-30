import type cardDto from "../dto/card.dto";
import type cardVo from "../vo/card.vo";
import type { MapperInterface } from "./mapper";
import QuestionMapper from "./question.mapper";

export default class CardMapper implements MapperInterface<cardDto, cardVo> {
    private QuestionMapper: QuestionMapper
    constructor() {
    this.QuestionMapper = new QuestionMapper
}
convertVoToDto(vo: cardVo): cardDto {
    let dtoCard: cardDto = {
        id: vo.id,
        img: vo.img,
        name: vo.name,
        questions: this.QuestionMapper.convertListVoToDto(vo.questions),
    }
    return dtoCard
}

convertDtoToVo(dto: cardDto): cardVo {
    let voCard: cardVo = {
        id: dto.id,
        img: dto.img,
        name: dto.name,
        questions: this.QuestionMapper.convertListDtoToVo(dto.questions)
    }
    return voCard;
} 
convertListVoToDto(voList: cardVo[]): cardDto[] {
    let dtoArray: cardDto[] = []
    for (let i = 0; (i = voList.length); i++) {
      dtoArray.push(this.convertDtoToVo(voList[i]))
    }
    return dtoArray
  }
   convertListDtoToVo(dtoList: cardDto[]): cardVo[] {
      let voArray: cardVo[] = new Array()
      for (let i = 0; (i = dtoList.length); i++) {
        voArray.push(this.convertDtoToVo(dtoList[i]))
      }
      return voArray
    }

}