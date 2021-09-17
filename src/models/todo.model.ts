export class Todo{

    id!:number;
    title!: String;
    done!: Boolean;

    constructor(id: number, title: String, done: Boolean) {
        this.done = done;
        this.title = title;
        this.id = id;
    }
}