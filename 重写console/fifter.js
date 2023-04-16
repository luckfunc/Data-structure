function getData(id) {
    const objArr = [{
        id: '1',
        category: [{
            'cn': 'girlGame',
            'usa': 'BoyGame'
        }, {
            'cn1': 'girlGame',
            'usa1': 'BoyGame'
        }, {
            'cn2': 'girlGame',
            'usa2': 'BoyGame'
        }, {
            'cn3': 'girlGame',
            'usa3': 'BoyGame'
        }, {
            'cn4': 'girlGame',
            'usa4': 'BoyGame'
        }, {
            'cn5': 'girlGame',
            'usa5': 'BoyGame'
        }]
    },
        {
            id: '2',
            category: {
                'cn1': 'girlGame1',
                'usa1': 'BoyGame1'
            }
        },
        {
            id: '3',
            category: {
                'cn2': 'girlGame2',
                'usa2': 'BoyGame2'
            }
        },
        {
            id: '4',
            category: {
                'cn3': 'girlGame3',
                'usa3': 'BoyGame3'
            }
        },
        {
            id: '5',
            category: {
                'cn4': 'girlGame4',
                'usa4': 'BoyGame4'
            }
        },
        {
            id: '6',
            category: {
                'cn5': 'girlGame5',
                'usa5': 'BoyGame5'
            }
        },
        {
            id: '7',
            category: {
                'cn6': 'girlGame6',
                'usa6': 'BoyGame6'
            }
        },
        {
            id: '8',
            category: {
                'cn7': 'girlGame7',
                'usa7': 'BoyGame7'
            }
        },
        {
            id: '9',
            category: {
                'cn8': 'girlGame8',
                'usa8': 'BoyGame8'
            }
        },
        {
            id: '10',
            category: {
                'cn9': 'girlGame9',
                'usa9': 'BoyGame9'
            }
        },
        {
            id: '11',
            category: {
                'cn10': 'girlGame10',
                'usa10': 'BoyGame10'
            }
        },
    ];
    const resultArr = objArr.filter((item, index) => {
        return item.id === id;
    })
    return resultArr[0].category;
}

console.log(getData('1'), '返回的值')
