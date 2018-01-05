import { observable, computed, action } from 'mobx';

export class SpellingDataStore {

  constructor() {
    // fixture Data
    this.rights = 0;
    this.wrongs = 0;
    this.audioSource = "https://s3.amazonaws.com/lengio-development/sounds/8017fa443b55ba9b89aadbd688093ba3c67a7e9e/original.mp3";
    this.letterPool = ['a','t','h','e','t','o','r','e','i','c','l','e','t','o','r','e','i','c','l'];
    this.spellingResult = "el tomate grande";
  }

  @observable audioSource: String;

  @observable letterPool: Array<String>;

  @observable spellingResult: String;  

  @observable rights: Number;

  @observable wrongs: Number;

  
};

export default SpellingDataStore;
