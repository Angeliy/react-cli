interface Re {
    str:string
}

class Index {
    private data:string;
    constructor(data:Re) {
        this.data = data.str
    }
    log() {
        console.log(this.data)
    }
}

const index = new Index({
    str:'项目首页'
})
index.log();