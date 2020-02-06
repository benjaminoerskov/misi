import { Observable } from "rxjs";

export interface NestedTimeResult {
    Result: TimeResult;
    Observable: Observable<void>;
    Name:String;
}