export interface MapperInterface <T, E> {
    convertVoToDto(e: E): T;
    convertDtoToVo(t: T): E;
    convertListVoToDto(e: E[]): T[];
    convertListDtoToVo(t: T[]): E[];
}