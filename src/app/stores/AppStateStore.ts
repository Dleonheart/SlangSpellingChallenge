import { observable, computed, action } from 'mobx';

export class AppStateStore {

  constructor() {
    this.scene = 'intro'
  }

  @observable scene : String;

  @computed 
  get isIntroScene() {
    return this.scene === 'intro';
  }

  @action
  introFinished() {
    this.scene = 'excercise';
  }

  
};

export default AppStateStore;
