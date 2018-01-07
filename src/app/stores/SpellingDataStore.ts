import { observable, computed, action, runInAction } from 'mobx';
import { SpellingApi } from '../api/SpellingApi';

export class SpellingDataStore {

  constructor(api: SpellingApi) {
    // fixture Data
    this.api = api;
    this.waiting = true;
  }

  private api: SpellingApi;
  private exerciseId : any; 

  @observable waiting: Boolean;

  @observable audioSource: string;

  @observable letterPool: Array<{letter:string, isUsed:boolean}>;

  @observable spellingResult: string = "";  

  @observable rights: Number = 0;

  @observable wrongs: Number = 0;

  @observable error: string;

  @action
  async fetchExerciseData() {
    try {
      this.waiting = true;
      let data = await this.api.fetchData();
      runInAction(() => {
        this.waiting = false;
        let {audioSource, letterPool, id } = data;
        this.audioSource = audioSource;
        this.letterPool = letterPool.map((letter) => {
          return {
            letter: letter,
            isUsed: false
          }
        });
        this.exerciseId = id;
      })
    } catch (error) {
      this.error = error;
      console.warn(error);
    }
  }

  @action
  async submitResponse() {
    let answerData = {
      id: this.exerciseId,
      answer: this.spellingResult
    }
    let responseData = await this.api.submitResponse(answerData);
    runInAction(() => {
      console.log(responseData);
    });

  }

  @action 
  setSpellingResult(result: string) {
    if(result.length > this.spellingResult.length) {
      this.updateUsedChar(result);
    } else{
      this.updateUnusedChar(this.spellingResult)
    }
    this.spellingResult = result;
  }

  @action
  updateUsedChar(result){
    let addedChar = result.substr(result.length-1);
    let usedChar = this.letterPool.find((char) => (char.letter === addedChar) && !char.isUsed);
    if(usedChar) {
      usedChar.isUsed = true;
    }
  }

  @action
  updateUnusedChar(result){
    let deletedChar = result.substr(result.length-1);
    let unusedChar = this.letterPool.find((char) => (char.letter === deletedChar) && char.isUsed);
    if(unusedChar) {
      unusedChar.isUsed = false;
    }
  }

  @action
  letterPoolToResult(index: any) {
    let charObject = this.letterPool[index];
    charObject.isUsed = true;
    this.spellingResult = this.spellingResult.concat(charObject.letter);
  }

  @action
  skipExercise() {
    this.spellingResult = "";
    this.fetchExerciseData();
  }
  
};

export default SpellingDataStore;
