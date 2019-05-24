import { Component } from '@angular/core';
import { utilisateur } from './Entities/utilisateur';
import { livres } from './Entities/livres';
import { flush } from '@angular/core/testing';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';


@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})
export class AppComponent {
info = {desc: 'Bienvenue dans notre biblioteque en ligne.'};
utlisateur1 = new utilisateur ('Admin', 'Admin', 'Habitue');
utlisateur2 = new utilisateur ('User', 'User', 'Normal');
Users = [this.utlisateur1, this.utlisateur2];
id = 0 ;
livre1 = new livres(this.id++, 'Le rouge et le noir', 'roman', false,'');
livre2 = new livres(this.id++, 'Chasse, peche et tradition l hebdo', 'magasine', false,'');
livre3 = new livres(this.id++, 'Enciclopedie', 'Enciclopedie duh', false,'');
livre4 = new livres(this.id++, 'Les fleurs du malt', 'roman', false,'');
livre5 = new livres(this.id++, 'Le malade imaginaire', 'piece', false,'');
livre6 = new livres(this.id++, 'how to typescript for noob', 'cours', false,'');
livre7 = new livres(this.id++, 'Canard pc', 'magasine', false,'');
livre8 = new livres(this.id++, 'la pelle de chtuluh', 'conte', false,'');
livre9 = new livres(this.id++, 'le horla', 'nouvelle', false,'');
livre10 = new livres(this.id++, '01net', 'magasine', false,'');
Livres=[this.livre1,this.livre2,this.livre3, this.livre4,this.livre5,this.livre6,this.livre7,this.livre8,this.livre9,this.livre10]
nbr=1;
title = 'login_page';


zoneText = {login: '', pass: ''};
activeUser;
logged=false;
login() {
    this.Users.forEach(element => {
if (this.zoneText.login == element.login && this.zoneText.pass == element.pass ) {
    this.logged=true;
        this.nbr=1;
        this.activeUser=element;
    if(element.type=='Habitue'){
        this.nbr=5;
    }
    this.info = {desc: 'Bienvenue '+this.zoneText.login+", vous pouvez reserver "+this.nbr+" livres."};
}      
    });

}
deco(){
    this.logged=false;
}
reserver(c){
 this.Livres.forEach(e => {
     if(c.titre==e.titre){
         if(c.dispo==true){
             if(e.prop==this.zoneText.login){
        e.dispo=false;
         e.prop='';
            }else{
               this.info = {desc: 'Ce livre est deja emprunter par quelqu un d autre !'};  
             }
         }else if (this.check()){
            e.dispo=true;
            e.prop=this.zoneText.login;

         }else{
              this.info = {desc: 'Vous avez atteint le maximum de reservation'};
         }
     }
 });
}
check() {
    let livreRes =0;
    this.Livres.forEach(e => {
        if(e.prop==this.activeUser.login){
            livreRes++;
        }
    });
    if(livreRes>=this.nbr){
        return false;
    }else{
        return true;
    }
}
}
