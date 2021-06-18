from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def home():
    logo1 = 'https://i.ibb.co/ZVHy2j7/letreiro.png'
    logo2 = 'https://i.ibb.co/pPH4bzp/stelar-circulo.png'
    viloes = [
        {
            'nome': 'Olho Verde',
            'foto': 'https://i.ibb.co/B20qD3v/olho-verde.png',
            'vida': 20
        },
        {
            'nome': 'Jinx',
            'foto': 'https://i.ibb.co/CbL8DjY/jinx.png',
            'vida': 10
        },
        {
            'nome': 'Estrela Negra',
            'foto': 'https://i.ibb.co/zHcssLm/estrela-negra.png',
            'vida': 30
        }
    ]

    titans = [
        {
            'nome': 'Ravena',
            'foto': 'https://i.ibb.co/sJQLV0c/ravena.png',
            'dano': 15
        },
        {
            'nome': 'Robin',
            'foto': 'https://i.ibb.co/pxZgw5L/robin.png',
            'dano': 7
        },
        {
            'nome': 'Stelar',
            'foto': 'https://i.ibb.co/cctz0D9/stelar.png',
            'dano': 10
        }
    ]

    return render_template(
        'index.html',
        viloes=viloes,
        titans=titans,
        logo1 = logo1,
        logo2 = logo2
    )


if __name__ == '__main__':
    app.run(debug=True)
