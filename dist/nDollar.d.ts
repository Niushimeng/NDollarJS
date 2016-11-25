export declare class Point {
    X: number;
    Y: number;
    constructor(X: number, Y: number);
    static origin(): Point;
}
export declare class Rectangle {
    X: number;
    Y: number;
    Width: number;
    Height: number;
    constructor(X: number, Y: number, Width: number, Height: number);
}
export declare class Result {
    Name: string;
    Score: number;
    constructor(Name: string, Score: number);
}
export declare class Unistroke {
    Name: string;
    Points: Point[];
    StartUnitVector: Point;
    Vector: number[];
    constructor(Name: string, useBoundedRotationInvariance: boolean, points: Point[]);
}
export declare class Multistroke {
    Name: string;
    NumStrokes: number;
    Unistrokes: Unistroke[];
    constructor(Name: string, useBoundedRotationInvariance: boolean, strokes: Point[][]);
}
export declare class Recognizer {
    Multistrokes: Multistroke[];
    constructor();
    Recognize(strokes: Point[][], useBoundedRotationInvariance: boolean, requireSameNoOfStrokes: boolean, useProtractor: boolean): Result;
    AddGesture(name: string, useBoundedRotationInvariance: boolean, strokes: Point[][]): number;
    ClearGestures(): void;
    LoadDefaultGestures(useBoundedRotationInvariance: boolean): void;
}
