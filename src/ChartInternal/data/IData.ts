/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
export interface IDataRow {
    x: number;
    value: number;
    id: string;
    index: number;
    name?: string;
}

export interface IData {
    id: string;
    id_org: string;
    values: IDataRow[];
}
