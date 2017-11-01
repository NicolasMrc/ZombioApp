/**
 * Created by Nico on 01/11/2017.
 */


export class Order{
  supportRecruitment : number;
  assaultRecruitment : number;
  sniperRecruitment : number;
  wallImproving : number;

  constructor(supportRecruitment : number, assaultRecruitment : number, sniperRecruitment : number, wallImproving : number){
    this.assaultRecruitment = assaultRecruitment;
    this.sniperRecruitment = sniperRecruitment;
    this.supportRecruitment = supportRecruitment;
    this.wallImproving = wallImproving;
  }

}
