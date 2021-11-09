export declare type TaskObject = {
    id: number;
    title: string;
    description: string;
    createdAt: number;
}

export declare type Add = {
    success: boolean;
};

export declare type Delete = {
    success: boolean;
};

export declare type List = {
    success: boolean;
    data: {
        tasks: TaskObject[]
    }
}
