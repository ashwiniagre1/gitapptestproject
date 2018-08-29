/**
 * Created by: 
 * Date: 29/08/2018	
 */
export class NewModel
{
	
	private _newId: string;
	
	constructor() { 
	}
	
	set newId(value: string) {
		this._newId = value;
	}
	get newId() : string {
		return this._newId;
	}
	
}
