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

export class LoveLetter extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            text: 'Loading...',
        }
        const loveLetter = getLoveLetter();
        loveLetter.then(resp => {
            this.setState({
                text: resp.result.join(' ')
            })
        });
    }
    render() {
        return (<p> {(this.state as any).text} </p>);
    }
}