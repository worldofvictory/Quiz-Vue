import type cardDto from "../dto/card.dto";
import CardMapper from "../mapper/card.mapper";
import type cardVo from "../vo/card.vo";

export default class CardService {
private cardMapper : CardMapper;

public constructor() {
    this.cardMapper = new CardMapper(); 
}

async getCards(): Promise<cardVo[]>{
    const res = await fetch("../../data/quizes.json");
    const resVo = res.json().then((data)=> 
         this.cardMapper.convertListDtoToVo(data as cardDto[]))
    return resVo;
}
}