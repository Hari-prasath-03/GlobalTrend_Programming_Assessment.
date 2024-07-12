

const fibonacci = (count = 10) => {

    let a=0,b=1,c=0;

    for(let i=0; i<count; i++) {
        console.log(c);
        a = b;
        b = c;
        c = a+b;
    }
}

fibonacci();
