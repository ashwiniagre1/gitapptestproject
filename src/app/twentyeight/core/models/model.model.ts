/**
 * Created by: 
 * Date: 29/08/2018	
 */
export class Model
{
	
	private _id: string;
	
	constructor() { 
	}
	
	set id(value: string) {
		this._id = value;
	}
	get id() : string {
		return this._id;
	}
	
}
