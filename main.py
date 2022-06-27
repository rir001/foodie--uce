from flask import Flask, render_template

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/pruebasss', methods=['GET'])
def preba():
    return render_template('prueba.html')

if __name__ == '__main__':
    app.run(debug=True)

