// Type declarations for bun:ffi module to allow Next.js builds
declare module 'bun:ffi' {
  export enum FFIType {
    cstring = 'cstring',
    ptr = 'pointer',
    i8 = 'i8',
    i16 = 'i16',
    i32 = 'i32',
    i64 = 'i64',
    u8 = 'u8',
    u16 = 'u16',
    u32 = 'u32',
    u64 = 'u64',
    f32 = 'f32',
    f64 = 'f64',
  }

  export function dlopen(path: string, symbols: any): any;
  export function read(ptr: number, offset?: number, length?: number): any;
  export function ptr(buffer: Buffer | ArrayBuffer): number;
  export function toArrayBuffer(ptr: number, length: number): ArrayBuffer;
  export const suffix: string;
  
  export class CString {
    constructor(ptr: number | Buffer);
    toString(): string;
  }
}
