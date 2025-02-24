export function tryCatch<T>(cb: () => T, finallyCb?: () => void): {
    data: T;
    error: string;
} {
    try {
        const res = cb();
        return {
            data: res,
            error: "",
        };
    } catch (err: any) {
        return {
            data: "" as T, 
            error: (err as Error).message,
        }; 
    } finally {
        if (finallyCb) {
            finallyCb();
        }
    }
}

export async function asyncTryCatch<T>(cb: () => T, finallyCb?: () => void): Promise<{
    data: T;
    error: string;
}> {
    try {
        const res = await cb();
        return {
            data: res,
            error: "",
        };
    } catch (err: any) {
        return {
            data: "" as T, 
            error: (err as Error).message,
        }; 
    } finally {
        if (finallyCb) {
            finallyCb();
        }
    }
}
