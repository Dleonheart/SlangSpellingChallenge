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

  @computed 
  get isHelpMessageScene() {
    return this.scene === 'help-message';
  }

  @action
  introFinished() {
    this.scene = 'help-message';
  }

  @action
  helpMessageFinished() {
    this.scene = 'excercise';
  }

  
};

export default AppStateStore;
