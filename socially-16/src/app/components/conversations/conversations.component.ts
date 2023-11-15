import { Component } from '@angular/core';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss']
})
export class ConversationsComponent {
  showAllMessageCards : boolean = true;
  singleConversatiionCardd : boolean = false;


  messageSSearch : any;

  messages : Array<messagee> = [
    {
      name : 'Ashok',
      message  : 'You : I just landed a job offer! Excited for the next chapter.' ,
    },
    {
      name : 'Gretchen',
      message  : 'You : I just landed a job offer! Excited for the next chapter.' ,
    },
    {
      name : 'Jaxson',
      message  : 'You : I just landed a job offer! Excited for the next chapter.' ,
    },
    {
      name : 'Zaire',
      message  : 'You : I just landed a job offer! Excited for the next chapter.' ,
    },
    {
      name : 'Kierra',
      message  : 'You : I just landed a job offer! Excited for the next chapter.' ,
    },
  ];
  constructor( ){
  }

  ngonInit(){
    this.filteredItems = this.messages;
  }

  activeIndex = 0;
  customColors: string[] = ['#FFBCDC;', '#FFEE44', '#D7A3C9', '#CDE809', '#E0682B'];
  crossIconModel : boolean = false;
  clearCross(){
    this.messageSSearch = '';
    this.crossIconModel = false;
  }
  filteredItems :any =[];
  search(): void {
    // this.filteredItems = this.messages;
    this.filteredItems = this.messages.filter(item =>
      item.name.toLowerCase().includes(this.messageSSearch.toLowerCase())
    );
  }
}
interface messagee {
  name : string;
  message : string;
}