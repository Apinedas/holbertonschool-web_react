interface MajorCredits {
    credits: number
    brand: "major"
}

interface MinorCredits {
    credits: number
    brand: "minor"
}

const sumMajorCredits = (subject1: MajorCredits | MajorCredits, subject2: MajorCredits | MajorCredits): MajorCredits => {
    const ret: MajorCredits= {
        credits: subject1.credits + subject2.credits,
        brand: "major"
    }
    return (ret);
}

const sumMinorCredits = (subject1: MajorCredits | MajorCredits, subject2: MajorCredits | MajorCredits): MinorCredits => {
    const ret: MinorCredits= {
        credits: subject1.credits + subject2.credits,
        brand: "minor"
    }
    return (ret);
}
