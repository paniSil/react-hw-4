export interface MessageInterface {
    userId: number
    id: number
    title: string
    body: string
  }

  export interface Accumulator {
    [userId: number]: MessageInterface[];
  }

