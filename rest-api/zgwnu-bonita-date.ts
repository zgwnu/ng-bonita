export class ZgwnuBonitaDate {
    private _dateValue: Date

    set (bonitaDateValue: string) {
        console.log('ZgwnuBonitaDate.set = ', bonitaDateValue)
        this._dateValue = new Date(bonitaDateValue.substr(0, 10) + 'T' + bonitaDateValue.substr(11))
    }

    get () {
        return this._dateValue
    }
}