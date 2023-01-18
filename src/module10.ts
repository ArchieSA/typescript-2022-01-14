export interface Idlabel {
    id: number;
}

interface NameLabel {
    name: string;
}

type NameOrId<T extends number | string> = T extends number ? Idlabel : NameLabel;

function createLabel<LabelType extends number | string>(label: LabelType): NameOrId<LabelType> {
    throw '';
}

const a = createLabel<string>('');

const b = createLabel<number>(23);