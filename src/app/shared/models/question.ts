export interface Question {
    id?: any;
    question?: {
        type: string;
        value: string;
    }[];
    option_a?: {
        type: string;
        value: string;
    }[];
    option_b?: {
        type: string;
        value: string;
    }[];
    option_c?: {
        type: string;
        value: string;
    }[];
    option_d?: {
        type: string;
        value: string;
    }[];
    grade: string;
    answer?: Answer;
    origin?: Origin;
}

export interface Answer {
    index: string;
    verified: boolean;
}

export interface Origin {
    from: string;
    year: number;
}
