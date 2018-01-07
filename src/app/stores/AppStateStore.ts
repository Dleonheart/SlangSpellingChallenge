import { observable, computed, action } from 'mobx';

export class AppStateStore {

  constructor() {
    this.scene = 'exercise';
  }

  /* -- Marked for refactoring
    TODO: put state tracking constants in their own file */

  @observable scene : String;

  @computed 
  get isIntroScene() {
    return this.scene === 'intro';
  }

  @computed 
  get isHelpMessageScene() {
    return this.scene === 'help-message';
  }

  @computed 
  get isExercise() {
    return this.scene === 'exercise';
  }


  @action
  introFinished() {
    this.scene = 'help-message';
  }

  @action
  helpMessageFinished() {
    this.scene = 'exercise';
  }

  
};

export default AppStateStore;
