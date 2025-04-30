import type questionDto from '../dto/question.dto'
import type questionVo from '../vo/question.vo'
import type { MapperInterface } from './mapper'
import opzioneMapper from './opzione.mapper'

export default class QuestionMapper implements MapperInterface<questionDto, questionVo> {
  private opzioneMapper: opzioneMapper

  constructor() {
    this.opzioneMapper = new opzioneMapper()
  }
  convertVoToDto(vo: questionVo): questionDto {
    let dtoQuestion: questionDto = {
      id: vo.id,
      text: vo.text,
      options: this.opzioneMapper.convertListVoToDto(vo.options),
    }
    return dtoQuestion
  }

  convertDtoToVo(dto: questionDto): questionVo {
    let voQuestion: questionVo = {
      id: dto.id,
      text: dto.text,
      options: this.opzioneMapper.convertListDtoToVo(dto.options),
    }
    return voQuestion
  }

  convertListVoToDto(voList: questionVo[]): questionDto[] {
    let dtoArray: questionDto[] = []
    for (let i = 0; (i = voList.length); i++) {
      dtoArray.push(this.convertDtoToVo(voList[i]))
    }
    return dtoArray
  }

  convertListDtoToVo(dtoList: questionDto[]): questionVo[] {
    let voArray: questionVo[] = new Array()
    for (let i = 0; (i = dtoList.length); i++) {
      voArray.push(this.convertDtoToVo(dtoList[i]))
    }
    return voArray
  }
}
