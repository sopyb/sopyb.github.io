 class RNG {
    private m = 0x80000000; // 2**31
    private a = 1103515245;
    private c = 12345;
    private state: number;

    constructor(seed?: number) {
      this.state = seed ? seed : Math.floor(Math.random() * (this.m - 1));
    }

    nextInt(): number {
      this.state = (this.a * this.state + this.c) % this.m;
      return this.state;
    }

    nextFloat(): number {
      return this.nextInt() / this.m;
    }
  }

  export default RNG;