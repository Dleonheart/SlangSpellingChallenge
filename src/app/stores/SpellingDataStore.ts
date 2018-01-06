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

  @observable audioSource: String;

  @observable letterPool: Array<String>;

  @observable spellingResult: String = "";  

  @observable rights: Number = 0;

  @observable wrongs: Number = 0;

  @observable error: String;

  @action
  async fetchExerciseData() {
    try {
      this.waiting = true;
      let data = await this.api.fetchData();
      runInAction(() => {
        this.waiting = false;
        let {audioSource, letterPool, id } = data;
        this.audioSource = audioSource;
        this.letterPool = letterPool;
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
  setSpellingResult(result: String) {
    this.spellingResult = result;
  }

  
};

export default SpellingDataStore;
