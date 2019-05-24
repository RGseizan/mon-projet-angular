 export class utilisateur{
        constructor(private _login: string,private _pass: string, private _type: string)   {}

            get type(){
        return this._type;
        }

        set type(type:string){
            this._type=type;
        }

        get login(){
        return this._login;
        }

        set login(id:string){
            this._login=id;
        }
        get pass(){
        return this._pass;
        }
        set pass(pass: string){
            this._pass=pass;
        }

    }