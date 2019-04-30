import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';


@Injectable({
  providedIn: 'root'
})

export class SalesService {

  areaPitch = [];
  pitch: String;

  constructor(private fb: FirebaseService) {   
    this.getPitches();
  }

  getPitches(){
   this.fb.getPitches().subscribe(pitch => {
     this.areaPitch = pitch;
   });

   return this.fb.getPitches();
  }

  generatePitch(user:any, pitchData:any){  

    let firstName = pitchData.client.clientFirstName;
    let lastName = pitchData.client.clientLastName;
    let org = pitchData.client.clientOrganization;
    let area = pitchData.client.clientArea;
    let title = pitchData.client.clientTitle;
    let pitchContent = this.selectPitch(area);
    let salutation = user.pitchSalutation;
    let intro = user.pitchIntro;
    let pitchStart = user.pitchStart;
    let conclusion = user.pitchConclusion;
    let final = user.pitchFinal;
    let userFirst = user.firstName;
    let userLast = user.lastName;

    this.pitch =`
${salutation} ${firstName},

${intro}

${pitchStart} ${title} at ${org}. ${pitchContent}

${conclusion}

${final}
${userFirst} ${userLast}
    `;
    
    return this.pitch;
  }

  selectPitch(area){
    let pitchContent;

    pitchContent = this.areaPitch.find(p => {
      return p.areaName === area;
    });
      
    return pitchContent.pitch;
  }
}
