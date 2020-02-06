import { Observable } from "rxjs";
import { TimeResult } from './TimeResult';

export interface NestedTimeResult {
    Result: TimeResult;
    Observable: Observable<void>;
    Name:String;
}