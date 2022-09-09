import uniqid from 'uniqid';
class task {
    constructor(text) {
        this.text = text;
        this.id = uniqid();
        this.status = false;
    }
}
export default task;