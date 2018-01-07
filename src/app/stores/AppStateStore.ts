import { observable, computed, action } from 'mobx';

export enum AppStates {
  intro, helpMessage, exercise
}

export class AppStateStore {

  constructor() {
    this.scene = AppStates.intro;
  }

  @observable scene : AppStates;

  @computed 
  get isIntroScene() {
    return this.scene === AppStates.intro;
  }

  @computed 
  get isHelpMessageScene() {
    return this.scene === AppStates.helpMessage;
  }

  @computed 
  get isExercise() {
    return this.scene === AppStates.exercise;
  }


  @action
  introFinished() {
    this.scene = AppStates.helpMessage;
  }

  @action
  helpMessageFinished() {
    this.scene = AppStates.exercise;
  }

  
};

export default AppStateStore;
