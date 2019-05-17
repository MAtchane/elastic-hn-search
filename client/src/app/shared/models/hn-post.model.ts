import { Deserializable } from './deserializable.model';

export class HnPost implements Deserializable {
    by: string;
    id: number;
    score: number;
    text: string;
    time: number;
    title: string;
    type: string;
    url: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}