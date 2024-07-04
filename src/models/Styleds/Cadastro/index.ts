const Cadastro = [
    {
        id : 1,
        titulo : 'Digite sua data de nascimento:',
        subtitulo : '',
        buttonNext : true,
        textButton : [],
        objetivoPrincipal : [],
        select : []
    },
    {
        id : 2,
        titulo : 'Qual o seu peso?',
        subtitulo : '',
        buttonNext : true,
        textButton : [
            {
                id : 1,
                nome : 'Kg'
            },
            {
                id : 2,
                nome : 'Ibs'
            }
        ],
        objetivoPrincipal : [],
        select : []
    },
    {
        id : 3,
        titulo : 'Vamos escolher a meta que você vai bater!',
        subtitulo : '',
        buttonNext : true,
        textButton : [
            {
                id : 1,
                nome : 'Kg'
            },
            {
                id : 2,
                nome : 'Ibs'
            }
        ],
        objetivoPrincipal : [],
        select : []
    },
    {
        id : 4,
        titulo : 'Qual a sua altura?',
        subtitulo : '',
        buttonNext : true,
        textButton : [
            {
                id : 1,
                nome : 'Cm'
            },
            {
                id : 2,
                nome : 'Ft/In'
            }
        ],
        objetivoPrincipal : [],
        select : []
    },
    {
        id : 5,
        titulo : 'Qual é o seu sexo biológico?',
        subtitulo : 'Precisamos saber o seu sexo para calcular com precisão o seu objetivo calórico diário.',
        buttonNext : false,
        textButton : [
            {
                id : 1,
                nome : 'F'
            },
            {
                id : 2,
                nome : 'M'
            }
        ],
        objetivoPrincipal : [],
        select : []
    },
    {
        id : 6,
        titulo : 'Qual é o seu objetivo principal?',
        subtitulo : '',
        buttonNext : false,
        textButton : [],
        objetivoPrincipal : [
            {
                id : 1,
                nome: 'Perder peso',
            },
            {
                id : 2,
                nome: 'Manter peso',
            },
            {
                id : 3,
                nome: 'Ganhar peso',
            },
            {
                id : 4,
                nome: 'Ganhar massa muscular',
            },
            {
                id : 5,
                nome: 'Outros',
            }
        ],
        select : []
    },
    {
        id : 7,
        titulo : 'Qual é o seu nível de atividade física diária?',
        subtitulo : 'Saber seu nível é importante.',
        buttonNext : false,
        textButton : [],
        objetivoPrincipal : [
            {
                id : 1,
                nome: 'Pouca atividade',
            },
            {
                id : 2,
                nome: 'Atividade intensa',
            },
            {
                id : 3,
                nome: 'Avançado',
            }
        ],
        select : []
    },
    {
        id : 8,
        titulo : 'Você segue uma dieta específica?',
        subtitulo : 'Vamos adaptar nossas recomendações às suas preferências.',
        buttonNext : false,
        textButton : [],
        objetivoPrincipal : [
            {
                id : 1,
                nome: 'Clássica',
            },
            {
                id : 2,
                nome: 'Pescetariana',
            },
            {
                id : 3,
                nome: 'Vegetariana',
            },
            {
                id : 4,
                nome: 'Vegana',
            }
        ],
        select : []
    },
    {
        id : 9,
        titulo : 'Caso haja algum problema de saúde, selecione quais:',
        subtitulo : '',
        buttonNext : true,
        textButton : [],
        objetivoPrincipal : [],
        select : [
            {
                id : 1,
                nome: 'Não possuo'
            },
            {
                id : 2,
                nome: 'Diabetes'
            },
            {
                id : 3,
                nome: 'Hipertensão'
            },
            {
                id : 4,
                nome: 'Colesterol Alto'
            },
            {
                id : 5,
                nome: 'Doenças Cardíacas'
            },
            {
                id : 6,
                nome: 'Distúrbios Digestivos'
            },
            {
                id : 7,
                nome: 'Alergias Alimentares'
            },
            {
                id : 8,
                nome: 'Intolerâncias Alimentares'
            }
        ]
    },
    {
        id : 10,
        titulo : 'Selecione as refeições que você costuma fazer no seu dia a dia:',
        subtitulo : '',
        buttonNext : true,
        textButton : [],
        objetivoPrincipal : [],
        select : [
            {
                id : 1,
                nome: 'Café da manhã'
            },
            {
                id : 2,
                nome: 'Lanche da manhã'
            },
            {
                id : 3,
                nome: 'Almoço'
            },
            {
                id : 4,
                nome: 'Café da tarde'
            },
            {
                id : 5,
                nome: 'Janta'
            },
            {
                id : 6,
                nome: 'Ceia'
            },
            {
                id : 7,
                nome: 'Sobremesa'
            }
        ]
    }
]

export {Cadastro};