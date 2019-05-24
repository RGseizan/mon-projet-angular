        export class livres{
            static forEach(arg0: (e: any) => void): any {
                throw new Error("Method not implemented.");
            }
        constructor(private _id: number,private _titre: string, private _type: string, private _dispo: boolean,private _prop:string)   {}

            get type(){
        return this._type;
        }

        set type(type:string){
            this._type=type;
        }

        get id(){
        return this._id;
        }

        set id(id:number){
            this._id=id;
        }
        get titre(){
        return this._titre;
        }
        set titre(titre: string){
            this._titre=titre;
        }

        get dispo(){
        return this._dispo;
        }
        set dispo(dispo: boolean){
            this._dispo=dispo;
        }
        get prop(){
        return this._prop;
        }
        set prop(prop: string){
            this._prop=prop;
        }

    }