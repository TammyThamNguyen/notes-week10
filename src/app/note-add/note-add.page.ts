import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.page.html',
  styleUrls: ['./note-add.page.scss'],
})
export class NoteAddPage implements OnInit {
  title:string;
  content1:string;
  content2:string;
  constructor(
    private modalController:ModalController
  ) { }

  ngOnInit() {
  }
  saveNote(){
    let now = new Date().getTime();
    let note = { title: this.title, content1: this.content1, content2: this.content2 , date: now };
    this.modalController.dismiss({ save: true, note: note });
  }
  close(){
    this.modalController.dismiss({ save: false });
  }
  
}
