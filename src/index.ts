
export class Calculator {

    add(...numbers: number[]): number {
        return (numbers || []).reduce((sum, number) => sum + number);
    }

    subtract(...numbers: number[]): number {
        return (numbers || []).reduce((sum, number) => sum - number);
    }

    multiply(...numbers: number[]): number {
        return (numbers || []).reduce((sum, number) => sum * number);
    }

    divide(...numbers: number[]): number {
        return (numbers || []).reduce((sum, number) => sum / number);
    }

}