import React from 'react';

async function getLoveLetter() {
    return (await fetch("https://rosa-love-letter1.p.rapidapi.com/loveletterlong", {
        "method": "POST",
        "headers": {
            "x-rapidapi-key": "f8aebf5b48msh0b0bf93fe4e3978p128071jsn66ce53661385",
            "x-rapidapi-host": "rosa-love-letter1.p.rapidapi.com"
        }
    })).json();
}

interface LoveLetterProps {
    name: string | null;
}

// pure function that can be unit tested
export function replaceLastYouWithName(lines: string[], name: string): string[] {
    const newLines = [...lines];
    const regex = /\byou\b/;
    for (let i = newLines.length - 1; i >= 0; --i) {
        if (newLines[i] && newLines[i].match(regex)) { // understand truthy expressions
            newLines[i] = newLines[i].replace(regex, `you, ${name}`);
            break;
        }
    }
    return newLines;
}

// understand ES6 and TypeScript classes with React JS
export class LoveLetter extends React.Component<LoveLetterProps> {
    constructor(props: LoveLetterProps) {
        super(props);
        this.state = {
            texts: ['Loading...'],
        }
    }
    // understand life cycle events
    componentDidMount() {
        const loveLetter = getLoveLetter();
        loveLetter.then(resp => {
            const name = (this.props as {name: string}).name;
            const lines = replaceLastYouWithName(resp.result as string[], name);
            this.setState({
                texts: lines,
            });
        });
    }
    render() {
        return ((this.state as any).texts as string[]).map(t =>
            <p key={t}> {t} </p>);
        // using text as key which is not best practice, but this is just a demo
        // would normally use ID or similar and avoid index
    }
}