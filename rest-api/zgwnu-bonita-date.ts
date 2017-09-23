function parseBonitaDateStr(bonitaDateStr?: string): string {
    return bonitaDateStr.substr(0, 10) + 'T' + bonitaDateStr.substr(11)
}

export class ZgwnuBonitaDate extends Date {
    constructor(bonitaDateStr?: string){
        super(parseBonitaDateStr(bonitaDateStr))
    }

}