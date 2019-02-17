import { observable, computed, action, runInAction } from 'mobx';
import { SpellingApi } from '../api/SpellingApi';

export enum SpellingStates {
  waiting = 'waiting',
  exercise = 'exercise',
  results = 'results'
}


export class SpellingDataStore {

  constructor(api: SpellingApi) {
    this.api = api;
  }

  private api: SpellingApi;
  private exerciseId : any; 

  @observable uiState: SpellingStates = SpellingStates.waiting;

  @observable audioSource: string;

  @observable letterPool: Array<{letter:string, isUsed:boolean}>;

  @observable spellingResult: string = "";  

  @observable rights: number = 0;

  @observable wrongs: number = 0;

  @observable error: string;

  @observable resultData : { answer: string, result: string, isCorrect: Boolean};

  
  @computed 
  get waiting () {
    return this.uiState === SpellingStates.waiting;
  }

  @computed 
  get showingExercise () {
    return this.uiState === SpellingStates.exercise;
  }

  @computed 
  get showingResults () {
    return this.uiState === SpellingStates.results;
  }

  @action
  async fetchExerciseData() {
    try {
      this.uiState = SpellingStates.waiting;
      let data = await this.api.fakeFetch();
      runInAction(() => {
        this.uiState = SpellingStates.exercise;
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
    this.uiState = SpellingStates.waiting;
    let responseData = await this.api.submitResponse(answerData);
    
    runInAction(() => {
      this.resultData = {
        answer: this.spellingResult,
        isCorrect: responseData.isCorrect,
        result : responseData.correctAnswer
      }
      this.uiState = SpellingStates.results;
      this.updateProgress();
    });

  }

  @action 
  updateProgress() {
    if(this.resultData.isCorrect ) {
      this.rights += 1;
    } else {
      this.wrongs += 1;
    }
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
    if(charObject.isUsed) {
      let index = this.spellingResult.indexOf(charObject.letter);
      this.spellingResult = this.spellingResult.slice(0,index) + this.spellingResult.slice(index+1);
    } else {
      this.spellingResult = this.spellingResult.concat(charObject.letter);
    }
    charObject.isUsed = !charObject.isUsed;
    
  }

  @action
  skipExercise() {
    this.spellingResult = "";
    this.fetchExerciseData();
  }
  
};

export default SpellingDataStore;
