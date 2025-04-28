import type opzioneDto from "../dto/opzione.dto";
import type opzioneVo from "../vo/opzione.vo";
import type { MapperInterface } from "./mapper";

export default class OpzioneMapper 
implements MapperInterface<opzioneDto,opzioneVo>{
    
    convertVoToDto(vo: opzioneVo): opzioneDto {
      let dto: opzioneDto = {
        id: vo.id,
        isCorrect: vo.isCorrect,
        label: vo.label,
        text: vo.text
      } 
      return dto;
    }

    convertDtoToVo(dto: opzioneDto): opzioneVo{
        let vo: opzioneVo = {
            id: dto.id,
            isCorrect: dto.isCorrect,
            label: dto.label,
            text: dto.text
        }
        return vo;
    }

    convertListVoToDto(voArr: opzioneVo[]): opzioneDto[]{
        let dtoArr: opzioneDto[] = [];
        for ( let i=0; i=voArr.length; i++){
           //let appVo: opzioneVo = voArr[i];
           //let appDto: opzioneDto = this.convertVoToDto(appVo);
           //dtoArr.push(appDto);
           dtoArr.push(this.convertDtoToVo(voArr[i]))
        }
        return dtoArr;
    }

    convertListDtoToVo(dtoArr: opzioneDto[]): opzioneVo[]{
        let voArr: opzioneVo[] = new Array;
        for ( let i=0; i=dtoArr.length; i++) {
            voArr.push(this.convertDtoToVo(dtoArr[i]))
        }
        return voArr;
    }
}