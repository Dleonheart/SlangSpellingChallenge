const mockData = {
  id: 185500,
  audioSource: "https://s3.amazonaws.com/lengio-development/sounds/8017fa443b55ba9b89aadbd688093ba3c67a7e9e/original.mp3",
  letterPool: [
  'a',
  't',
  'h',
  'e',
  't',
  'o',
  'r',
  'e',
  'i',
  'c',
  'l'
  ]
};

export class SpellingApi {

    private apiSource = "http://demo4757735.mockable.io/front-end-test";

    async fetchData() {
      let response = await fetch(this.apiSource);
      let data = await response.json();
      return data;
    }

    async fakeFetch() {
      return this.sleep(() => {
        return mockData;
      });
      
    }

    async timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    async sleep(fn, ...args) {
      await this.timeout(2000);
      return fn(...args);
    }

    async submitResponse(data) {
      // let response = await fetch(this.apiSource, {
      //   method: 'POST',
      //   body: JSON.stringify(data)
      // });
      // let result = await response.json();
      // return result;
      const correctAnswer = 'theoretical';
      return this.sleep(() => {
        return { 
          ...mockData, 
          correctAnswer,
          isCorrect: data.answer === correctAnswer,
        };
      });
    }
}
