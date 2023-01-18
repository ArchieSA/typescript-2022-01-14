export const t = '';

try {
    throw '';
    throw {};
    throw null;
    throw new Error();

} catch (e: unknown) {
    console.log(getErrorMessage(e));
}

function getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
        return error.message;
    }

    return String(error);
}