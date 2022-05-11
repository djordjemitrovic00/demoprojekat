class TodoClass {
    static key = 1;
    constructor(text) {
        this.text = text;
        this.id = TodoClass.key;
        TodoClass.key = TodoClass.key + 1;
    }
}
export default TodoClass;