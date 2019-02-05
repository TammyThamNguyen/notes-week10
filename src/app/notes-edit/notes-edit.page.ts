import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.page.html',
  styleUrls: ['./notes-edit.page.scss'],
})
export class NotesEditPage implements OnInit {
  title: string;
  content1: string;
  content2: string;
  date: number;
  key: string;
  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  saveNote(){
    let note = {title : this.title, content1: this.content1, content2: this.content2, date: this.date, key: this.key};
    this.modalController.dismiss({save: true, note: note});
  } 
  close(){
    this.modalController.dismiss({ save: false });
  }
}
