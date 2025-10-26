export class FsOperationError extends Error {
    constructor() { super('FS operation failed'); this.name = 'FsOperationError'; }
}