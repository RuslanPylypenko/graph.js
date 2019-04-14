var params = {
    lines: [
        {
            background: '#A6F',
            updateTime: 1000,
            elements: [
                {
                    background: '#6b6b6b',
                    width: 25
                },
                {
                    background: '#999',
                    width: 50
                },
                {
                    background: '#5ad3b0',
                    width: 25
                },
            ]
        },
        {
            background: '#46aaa3',
            updateTime: 3000,
            elements: [
                {
                    background: '#7bb4ff',
                    width: 10
                },
                {
                    background: '#999',
                    width: 30
                },
                {
                    background: '#A00',
                    width: 15
                },
                {
                    background: '#AF0',
                    width: 45
                },
            ]
        },
        {
            background: '#ffe744',
            updateTime: 2500,
            elements: [
                {
                    background: '#ff673e',
                    width: 25
                },
                {
                    background: '#3FF',
                    width: 75
                },
            ]
        },
        {
            background: '#507dff',
            updateTime: 600,
            elements: [
                {
                    background: '#15ffad',
                    width: 10
                },
                {
                    background: '#999',
                    width: 45
                },
                {
                    background: '#ab0c33',
                    width: 15
                },
                {
                    background: '#622',
                    width: 20
                },
                {
                    background: '#026',
                    width: 10
                },
            ]
        },
        {
            background: '#36c9c2',
            updateTime: 3000,
            elements: [
                {
                    background: '#27a26e',
                    width: 10
                },
                {
                    background: '#0e995c',
                    width: 10
                },
                {
                    background: '#AF0',
                    width: 20
                },
                {
                    background: '#622',
                    width: 25
                },
                {
                    background: '#026',
                    width: 35
                },
            ]
        },
        {
            background: '#46a775',
            updateTime: 250,
            elements: [
                {
                    background: '#6499ff',
                    width: 21
                },
                {
                    background: '#999',
                    width: 10
                },
                {
                    background: '#AF0',
                    width: 10
                },
            ]
        }
    ]
};


var graph = new Graph();

graph.init(document.getElementById('graph'), params);

