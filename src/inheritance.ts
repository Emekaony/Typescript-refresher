class Video {
  constructor(public title: string, public length: number) {}

  describeVideo() {
    console.log(`This is describe from parent class`);
  }
}

class ChimAmanda extends Video {
  constructor(public dummy: string, title: string, length: number) {
    // make sure to call parent constructor!
    super(title, length);
  }

  describeVideo() {
    // super.describeVideo()
    console.log(`This video is titled: ${this.title}`);
  }
}

const tt = new ChimAmanda("hello", "things fall apart", 44);
tt.describeVideo();
