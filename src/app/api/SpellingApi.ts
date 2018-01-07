export class SpellingApi {

    private apiSource = "http://demo4757735.mockable.io/front-end-test";

    async fetchData() {
        let response = await fetch(this.apiSource);
        let data = await response.json();
        return data;
    }

    async submitResponse(data) {
        let response = await fetch(this.apiSource, {
            method: 'POST',
            body: JSON.stringify(data)
        });
        let result = await response.json();
        return result;
    }
}
